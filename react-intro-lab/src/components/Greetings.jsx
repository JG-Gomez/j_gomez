import React from "react"


const MyGreeting = (props) => {
    let {fName} = props

    return (
       <div>
           <h1>Hello, {fName}</h1>
       </div>
    )
}

export default MyGreeting;