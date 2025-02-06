import React, { useState } from 'react'

function Usestate() {
  let Color = 'Red'
  const [color, setColor] = useState(Color); // string

  // number
  let Counter = 0;
  const [counter, setCounter] = useState(Counter); // number

  const increaseCount = () => {
    setCounter(counter => counter + 1) // 1
    setCounter(counter => counter + 1) // 2
    setCounter(counter => counter + 1) // 3
    setCounter(counter => counter + 1) // 4
  }


  // object

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
  // const changeColor = () => {
  //   const a = setCar({
  //     brand: 'Ford',
  //     model: 'Cryta',
  //     year: '2025',
  //     color: 'Green'
  //   })
  // }

   // appraoch 2
   const changeColor = () => {
    console.log(car)
    const a = setCar((car) => {
      return {...car, color: 'blue'}
    })
  }

  return (
    <>
      {/* string and number */}
      <div>
        <h1>This color is {color}</h1>
        <button onClick={() => setColor('Blue')}>change</button>  {/* string */}
        {/* <button onClick={() => setCounter(counter + 1)}>count</button> number */}
      </div>
      {/* number */}
      <div>
        <h1>Count :{counter}</h1>
        <button onClick={increaseCount}>increase</button>
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
