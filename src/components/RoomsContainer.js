import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </ >
  );
}

export default withRoomConsumer(RoomContainer);


/* Previous Way to do the same work but bulky*/
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) return <Loading />
//         return (
//           <div>
//             Hello from RoomsContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   )
// }
