// CourseMaterials.js

import React from 'react';
import Exercises from './Exercises';
import Lectures from './Lectures';
import StudyMat from './StudyMat';
import Progressbar from './progress';
import './CourseMaterials.css';

export default function CourseMaterials(props) {
  return (
    <div className="CourseMaterials">
      <div>
        <h1 className="PageTitle">
          You are currently viewing the {props.course} Course page for{' '}
          {props.class}
        </h1>
      </div>
      <section className="StudySection">
        <StudyMat course={props.course} class={props.class}></StudyMat>
      </section>
      <section className="LecturesSection">
        <h2 className="SectionTitle">Video(s):</h2>
        <Lectures course={props.course} class={props.class}></Lectures>
      </section>
      <section className="ExercisesSection">
        <h2 className="SectionTitle">Exercise PDF(s):</h2>
        <Exercises course={props.course} class={props.class}></Exercises>
        {/* <div className="ProgressBarWrapper"> */}
          {/* <Progressbar course={props.course} class={props.class} /> */}
        {/* </div> */}
      </section>
    </div>
  );
}
