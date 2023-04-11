import { useState } from "react";

import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  //Course.jsx deki ve images dan türettiğimiz kurs adlarını array olarak veriyoruz.
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];

  //Math.random 0 ile 1 arasında bir değer veriyor. courseArray.length 4 değerini veriyor.
  // 0.99 * 4 çarpımında veya 0.22 * 4 çarpımında çıkan sayıyı Math.floor ile tabana yuvarlıyorum.
  //Her durumda courseArray[0] ile courseArray[3] değerini verecektir. 0,1,2,3 şeklinde 4 elemanlı bir array.
  return courseArray[Math.floor(Math.random() * courseArray.length)];
  //return courseArray[3];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
      {/* {courses.map((course, index) => {
        return <Course key={index} courseName={course} />;
      })} */}
      {/* <div>Kurs : {courses}</div> */}
    </div>
  );
}

export default App;
