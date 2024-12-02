import React from "react";
import Student from "./Components/Student";
import Heading from "./Components/Heading";
import MainHeading from "./Components/MainHeading";
import profileimg from "./assets/img/profileimg.jpg";
import profileimg1 from "./assets/img/profileimg1.jpg";
import "./Index.css";
import State1 from "./Components/State1";
import ImageManipulation from "./Components/ImageManipulation";

function App() {
  const students = [
    {
      name: "John Doe",
      rollno: 2200320100035,
      course: "BTech",
      branch: "CSE",
      validTill: "2026",
      phoneno: 9876543210,
      profileImage: profileimg,
    },
    {
      name: "Aryan Yadav",
      rollno: 2200320100036,
      course: "BTech",
      branch: "CSE",
      validTill: "2026",
      phoneno: 9876543210,
      profileImage: profileimg1,
    },
    {
      name: "Bhumika",
      rollno: 2200320100056,
      course: "BTech",
      branch: "CSE",
      validTill: "2026",
      phoneno: 9876543210,
      profileImage: profileimg,
    },
  ];

  return (
    <>
      <MainHeading />
      <div className="App">
        {/* <State1></State1> */}
        <div className="container1">
          <ImageManipulation />
        </div>
        {/* {students.map((student, index) => (
          <div className="container" key={index}>
            <center>
              <Heading />
              <img src={profileimg}  />

              <Student student={student} />
            </center>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default App;
