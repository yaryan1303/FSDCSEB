import { useState } from "react";
import styles from "./State1.module.css";
const State1 = () => {
  const [count, SetCount] = useState(20);

  const Increment=()=>{
    SetCount(count+10);
  }
  const Decrement=()=>{
    SetCount(count-10);
  }

  return (
    <>
      
      <div className={`container ${styles.main}`}>
        <h6 >Increment & Decrement on Click App</h6>
        <div className={styles.btn} onClick={Decrement}>
          Decrement
        </div>
        <p>{count}</p>
        <div className={styles.btn} onClick={Increment}>
          Increment
        </div>
      </div>
    </>
  );
};

export default State1;
