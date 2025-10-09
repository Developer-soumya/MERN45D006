import React, { useContext } from 'react'
import Child3 from './Child3'
import { colorContext } from '../App'

function Child2() {
    const color=useContext(colorContext)
  return (
    <div>
        Color :{color}
        <Child3 />
    </div>
  )
}

export default Child2