/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { forwardRef } from 'react'
// eslint-disable-next-line react/prop-types
// const Card = forwardRef ({props}, ref) {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Lokasi file berada:</div>
//         <p className="text-gray-700 text-base"> {props.fileDirectory} </p>
//       </div>
//     </div>
//   )
// }

const Card = forwardRef(({ fileDirectory }, ref) => {
  return (
    <div className="max-w-lg rounded shadow-lg bg-white mb-4">
      <div className="px-6 py-4 overflow-hidden">
        <div className="font-bold text-xl mb-2">Lokasi file berada:</div>
        <p className="text-gray-700 text-base"> {fileDirectory} </p>
      </div>
    </div>
  )
})

export default Card
