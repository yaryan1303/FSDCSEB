import React, { useState } from "react";
import styles from "./ImageManipulation.module.css";
import profileimg1 from "../assets/img/profileimg1.jpg";
import profileimg from "../assets/img/profileimg.jpg";

function ImageManipulation() {
  const [image, setImage] = useState(profileimg1);
  const [style, setStyle] = useState({
    width: "200px",
    borderColor: "blue",
    transhtmlForm: "rotate(0deg)",
    backgroundColor: "green",
  });

  const changeImage = () => {
    setImage(profileimg);
    setStyle({
      width: "300px",
      borderColor: "green",
      transhtmlForm: "rotate(180deg)",
      backgroundColor: "green",
    });
  };

  const changeImageAgain = () => {
    setImage(profileimg1);
    setStyle({
      width: "250px",
      borderColor: "blue",
      transhtmlForm: "rotate(90deg)",
      backgroundColor: "green",
    });
  };

  return (
    <div className={styles.container}>
      <h1>Image Manipulation</h1>
      <img
        src={image}
        alt="Profile"
        style={{
          width: style.width,
          border: `2px solid ${style.borderColor}`,
          transition: "all 0.3s ease",
          transhtmlForm: style.transhtmlForm,
          backgroundColor: style.backgroundColor,
        }}
      />
      <button onClick={changeImage} className={styles.btn}>
        Change Image
      </button>
      <button onClick={changeImageAgain} className={styles.btn}>
        Change Image Again
      </button>
    </div>
  );
}

export default ImageManipulation;
