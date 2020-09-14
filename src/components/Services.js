import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail size='50'/>,
                title: 'Free Cocktails',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corpis!'
            },
            {
                icon: <FaHiking size='50'/>,
                title: 'Endless Hiking',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corpis!'
            },
            {
                icon: <FaShuttleVan size='50'/>,
                title: 'Free Shuttle',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corpis!'
            },
            {
                icon: <FaBeer size='50'/>,
                title: 'Strongest Beer',
                info: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corpis!'
            }
        ]
    }

    render() {
        return (
            <section className="services" >
                <Title title='Services' />
                <div className="services-center">
                {this.state.services.map(
                    (item, index) => {
                        return <article key={index} className="services">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                        }
                    )
                }
                </div>
            </section>
        )
    }
}
