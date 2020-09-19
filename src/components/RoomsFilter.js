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
  people.sort((a, b) => (a - b));
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
          <label htmlFor="type">
            Type
          </label>
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
          <label htmlFor="capacity">
            Capacity
          </label>
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

        {/* Price type start*/}
        <div className="form-group">
          <label htmlFor="price">
            Room Price ${price}
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control" />
        </div>
        {/* Price type end*/}

        {/* Size type start*/}
        <div className="form-group">
          <label htmlFor="size">
            Room size
          </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input" />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input" />
          </div>
        </div>
        {/* Size type end*/}
        {/* Extras Start */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* Extras End */}
      </form>
    </section>
  )
}
