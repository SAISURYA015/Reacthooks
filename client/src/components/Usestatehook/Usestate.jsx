import React, { useState } from 'react'

function Usestate() {
  let Color = 'Red'
  const [color, setColor] = useState(Color); // string

  let Counter = 0;
  const [counter, setCounter] = useState(Counter); // number

  // const [car, setCar] = useState('Ferrari')
  // const [brand, setBrand] = useState('Ferrari')
  // const [model, setModel] = useState('Roma')
  // const [year, setYear] = useState('2023')
  // const [colors, setColors] = useState('red')

  const [car, setCar] = useState({      //object
    brand: 'Ferrari',
    model: 'Roma',
    year: '2023',
    color: 'Red'
  })

  // appraoch 1
  const changeColor = () => {
    const a = setCar({
      brand: 'Ford',
      model: 'Cryta',
      year: '2025',
      color: 'Green'
    })
  }

  return (
    <>
      <div>
        <h1>This color is {color} count {counter}</h1>
        <button onClick={() => setColor('Blue')}>change</button>  {/* string */}
        <button onClick={() => setCounter(counter + 1)}>count</button> {/* number */}
      </div>
      {/* object */}
      <div>
        <h1>My {car.brand}</h1>
        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeColor}>Blue</button>
      </div>
    </>
    
  )
}

export default Usestate
