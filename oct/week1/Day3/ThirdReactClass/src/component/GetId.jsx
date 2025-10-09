import React from 'react'
import { useNavigate, useParams } from 'react-router'

function GetId() {
    const {id}=useParams()
    const navigate=useNavigate()

    const handleMovement=()=>{
        navigate("/about")
    }
  return (
    <div>GetId
        <br />
        Id {id}

        <button onClick={handleMovement}>
            go to About page
        </button>
        {/* <button onClick={()=>{}}>
            go to Home page
        </button> */}
    </div>
  )
}

export default GetId