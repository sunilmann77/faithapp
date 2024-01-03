import React from "react";
import Instructor from "./Instructor";

function CourseList(props) {
  const { data } = props;

  return (
    <div className="main">
      {data.map((item, index) => (
        <Instructor data={item} key={index} />
      ))}
    </div>
  );
}

export default CourseList;
