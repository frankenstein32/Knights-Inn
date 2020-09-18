import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  /* Get Unique types and add all to it */
  let types = getUnique(rooms, "type");
  types = ["all", ...types]

  /* Get unique capacity */
  let people = getUnique(rooms, "capacity");

  /* Map types to JSX */
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  /* Map capacity to JSX */
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Select type start*/}
        <div className="form-group">
          <label htmlFor="type"></label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* Select type end*/}

        {/* Guests type start*/}
        <div className="form-group">
          <label htmlFor="capacity"></label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* Guests type end*/}
      </form>
    </section>
  )
}
