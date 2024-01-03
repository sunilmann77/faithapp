import React from "react";
import styles from './nav.module.css';

function Navbar(props) {
  const {
    instructor,
    course,
  } = props.data;

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.instructorContainer}>
          <h4>{instructor.name}</h4>
        </div>
        <div className={styles.title}>{course.title}</div>
        {/* <div className={styles.courseInfo}>
          <div className={styles.coursefee}>
            <h4>Course fees</h4>
            <h1>{course.fee.currency} &nbsp; {course.fee.amount}</h1>
            <h2>what is included</h2>
            <button>Register Now</button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
