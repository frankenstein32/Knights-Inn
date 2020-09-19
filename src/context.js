import { findAllByAltText } from '@testing-library/react';
import React, { Component } from 'react'
// import items from './data'
import Client from './Contentful'

const RoomContext = React.createContext();

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        beakfast: false,
        pets: false
    }
 
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'knightsInnRoom',
                order: 'sys.createdAt'
            });
            console.log(response.items);
            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => {
                return item.price
            }))
            let maxSize = Math.max(...rooms.map(item => {
                return item.size
            }))
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    formatData(items) {

        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id }

            return room
        })
        return tempItems
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value,
        }, this.filterRooms);
    }

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;

        // All the rooms
        let tempRooms = [...rooms];

        //Transform value
        capacity = parseInt(capacity)

        //Transform price
        price = parseInt(price)

        // Filter acc to the type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        //Filter acc to the capacity
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)

        // Filter acc to the Price
        tempRooms = tempRooms.filter(room => room.price <= price)

        //Filter acc to the size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //Filter acc to the breakfast
        if (breakfast)
            tempRooms = tempRooms.filter(room => room.breakfast === breakfast)

        //Filter acc to the Pets
        if (pets)
            tempRooms = tempRooms.filter(room => room.pets === pets)

        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={
                { ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
// Another way to use Context - Snippet
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };