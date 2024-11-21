import React, { useState } from "react";
import styles from "./ImageManipulation.module.css";
import profileimg1 from "../assets/img/profileimg1.jpg";
import profileimg from "../assets/img/profileimg.jpg";

function ImageManipulation() {
  const [image, setImage] = useState(profileimg1);
  const [style, setStyle] = useState({
    width: "200px",
    borderColor: "blue",
    transform: "rotate(0deg)",
  });

  const changeImage = () => {
    setImage(profileimg);
    setStyle({
      width: "300px",
      borderColor: "green",
      transform: "rotate(180deg)",
    });
  };

  const changeImageAgain = () => {
    setImage(profileimg1);
    setStyle({
      width: "250px",
      borderColor: "blue",
      transform: "rotate(90deg)",
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
          transform: style.transform,
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
