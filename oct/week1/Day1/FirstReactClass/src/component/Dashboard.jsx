import React, { useState } from 'react'
import "./Dashboard.css"


function Dashboard(props) {
  // const props={
  //    a:90
  // }
  const [count, setCount] = useState(0)


  
  return (
    <div className=''>
      value a :{props.a}
      <br />
      this is dashboard page

      {props.children}

      <br />
      Count :{count}

      <br />

      <button onClick={() => {
        setCount(count + 1)
      }}>Inc</button>
    </div>
  )
}

export default Dashboard