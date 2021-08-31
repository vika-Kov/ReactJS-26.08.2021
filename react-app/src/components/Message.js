import React from 'react'

export default function Message(props) {
    return (
        <div>
        <h1>My First React App</h1>
       <h3>Hello, {props.name}</h3>
        </div>
    )
}
