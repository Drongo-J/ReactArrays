
import React, { useState } from 'react'


let initialShapes = [
    {id:0, type:'circle', x:50, y:100},
    {id:1, type:'square', x:150, y:100},
    {id:2, type:'circle', x:250, y:100}

]

export default function Shapes() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick(){
    const nextShapes = shapes.map(shape => {
        if (shape.type === 'square'){
            // No Change
            return shape;
        }
        var newY = 0;
        shape.y > 900 ? newY = 100 : newY = shape.y + 10
        return {
            ...shape,
            y: newY
        }
    });
    setShapes(nextShapes);
  }

  setTimeout(handleClick, 10);

  return (
    <div>
      <button onClick={handleClick}>Move Circles Down</button>
      {
        shapes.map(shape => (
            <div key={shape.id}
                 style={{
                    backgroundColor: 'purple',
                    position: 'absolute',
                    left: shape.x,
                    top: shape.y,
                    height: '40px',
                    width: '40px',
                    borderRadius: shape.type === 'circle' ? "50%" : ""
                 }}>

                    
            </div>
        ))
      }
    </div>
  )
}
