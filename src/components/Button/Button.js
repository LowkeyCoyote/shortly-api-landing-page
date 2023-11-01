import React from 'react'
import "./Button.module.css"

export default function Button(props) {
  return (
    <button
     style={{"borderRadius" : props.borderRadiusType}}>
        {props.text}
    </button>
  )
}
