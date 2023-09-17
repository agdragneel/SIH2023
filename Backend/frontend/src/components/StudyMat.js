import React from 'react'

export default function StudyMat(props) {
  return (
    <div>
      <p>Just assume this is a Study Material pdf for {props.course},{props.class}</p>
      <button>Download Now</button>
    </div>
  )
}
