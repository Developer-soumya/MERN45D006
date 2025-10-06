import React, { useState } from 'react'

function Home(props) {

    const [count,setCount]=useState(10);
    return (
        <div>
            this is the Home page

            Value ={props.a} <br />
            String value is : {props.str} <br />
            array is :{props.arr} <br />
            object name:{props.obj.name}
            <br />
            object Age :{props.obj.age}

            {props.fun()}
        </div>
    )
}

export default Home