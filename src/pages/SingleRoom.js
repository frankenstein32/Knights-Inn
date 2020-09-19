import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {

        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        // console.log(room)

        if (!room) {
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms
                        </Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast,
            pets, images } = room;

        /* Room Destructuring */
        const [mainImg, ...restImages] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    {/* <Hero hero="roomsHero"> */}
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                            </Link>
                    </Banner>
                    {/* </Hero> */}
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            restImages.map((item, index) => { return <img key={index} src={item} alt={name} /> })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: ${size} SQFT</h6>
                            <h6>
                                max Capacity: {" "}
                                {
                                    capacity > 1 ? `${capacity} People` : `${capacity} Person`
                                }
                            </h6>
                            <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
                            <h6>{breakfast && "Free Breakfast Included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {
                            extras.map((item, index) => {
                                return <li key={index}> -{item}</li>
                            })
                        }
                    </ul>
                </section>
            </>
        );
    }
}