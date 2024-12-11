"use client";
import React, { useState, useEffect } from "react";
const DisplayCourse = (props) => {
  const id = props.id;
  console.info(id);
  const [courseDetailsById, setCourseDetails] = useState([]);
  useEffect(() => {
    fetch(`./api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStaffDetailsById(data);
        console.dir(data);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, [id]);
  return (
    <div>
      <h2>{courseDetailsById.CourseTitle}</h2>
      <div>
        <p>
          {staffDetailsById.first_name} {staffDetailsById.last_name}
          <br />
          Email: {staffDetailsById.email}
          <br />
          Department: {staffDetailsById.department}
          <br />
        </p>
      </div>
    </div>
  );
};
export default DisplayCourse;