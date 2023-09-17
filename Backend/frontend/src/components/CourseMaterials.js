import React from 'react'
import Exercises from './Exercises'
import Lectures from './Lectures'
import StudyMat from './StudyMat'


export default function CourseMaterials(props) {
  return (
    <>
    <div>
        <h1>You are currently viewing the {props.course} Course page for {props.class}</h1>
    </div>
    <section>
        <h2>
            Text Material PDF(s):
        </h2>
            <StudyMat course={props.course} class={props.class}></StudyMat>
        
    </section>
    <section>
        <h2>
            Video(s):
        </h2>
            <Lectures course={props.course} class={props.class}></Lectures>
        
    </section>
    <section>
        <h2>
            Exercise PDF(s):
        </h2>
            <Exercises course={props.course} class={props.class}></Exercises>
        
    </section>
    </>
  )
}
