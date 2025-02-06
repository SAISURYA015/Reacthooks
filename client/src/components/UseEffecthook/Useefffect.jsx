import React, { useEffect, useState } from 'react'

function Useefffect() {

  const [count, setCount] = useState(0);
  // const [name, setName] = useState('Name');

  
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  },[count])

  return (
    <div>
      <h1>I' ve rendered {count}</h1>
    </div>
  )
}

export default Useefffect
