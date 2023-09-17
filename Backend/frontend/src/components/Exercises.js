import React from 'react'

export default function Exercises(props) {
  return (
    <div>
      <p>Just assume this is a Exercise pdf for {props.course},{props.class}</p>
      <button>Download Now</button>
    </div>
  )
}
