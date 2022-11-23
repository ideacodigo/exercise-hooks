import { useEffect, useState } from "react"

export const Message = () => {

   const [coords, setCoords] = useState({ x: 0, y: 0 });

   useEffect(() => {

      const onMouseMove = ({ x, y }) => {
         const coords = { x, y };
         setCoords(coords);
      }

      window.addEventListener('mousemove', onMouseMove);

      return () => {
         window.removeEventListener('mousemove', onMouseMove);
      }

   }, [])


   return (
      <>
         <h3>User already exists in coords: {coords.x} - {coords.y}</h3>
      </>
   )
}
