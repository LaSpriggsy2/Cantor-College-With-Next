import React from "react";
import { useState, useEffect } from "react";
const CourseList = () =>{

    let courseType = "computing";
    courseTable(courseType);
    courseType = "design";
    courseTable(courseType);
    function courseTable (courseType){
        useEffect(()=>{
      let elementId = "null";
      let jsonFile = "null";
    //const computingCourseList = document.querySelector(".computingCourses");
    if(courseType == "computing"){ elementId = "computingCoursesData"; jsonFile ="./data/computingCourseList.json";}
    else if(courseType == "design"){ elementId = "designCoursesData"; jsonFile = "./data/designCourseList.json";}
    const courseList = document.getElementById(elementId);
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
          console.dir(data);
          data.forEach((item) => {
            const row1 = document.createElement("tr");
            const courseName = document.createElement("td");
            
            const ucasPoints = document.createElement("td");
            const ucasCode = document.createElement("td");
            
            
            const row2 = document.createElement("tr");
            const awardName = document.createElement("td");
            const isUndergraduate = document.createElement("td");
            const isRecruiting = document.createElement("td");
    
            const entryYear = document.createElement("td");
            const studyLength = document.createElement("td");
            const hasFoundation = document.createElement("td");
    
            const row3 = document.createElement("tr");
            const isFullTime = document.createElement("td");
            const courseDescription = document.createElement("td");
            const row4 = document.createElement("tr");
    
            courseName.textContent = item.CourseTitle;
            ucasPoints.textContent = item.UcasPoints;
            ucasCode.textContent = item.UcasCode;
            awardName.textContent = item.CourseAwardName;
            isUndergraduate.textContent = item.CourseType;
            isRecruiting.textContent = item.NoLongerRecruiting;
            if(isRecruiting.textContent == "false") {isRecruiting.textContent = "Recruiting";}
            else if(isRecruiting.textContent == "true") {isRecruiting.textContent = "Not Recruiting";}
            entryYear.textContent = item.YearOfEntry;
            studyLength.textContent = item.StudyLength;
            hasFoundation.textContent = item.HasFoundationYear;
            if(hasFoundation.textContent == "false") {hasFoundation.textContent = "No Foundation Year";}
            else if(hasFoundation.textContent == "true") {hasFoundation.textContent = "Has Foundation Year";}
            isFullTime.textContent = item.ModeOfAttendance;
            courseDescription.textContent = item.CourseSummary;
            row1.appendChild(courseName);
            row1.appendChild(ucasPoints);
            row1.appendChild(ucasCode);
            row2.appendChild(awardName);
            row2.appendChild(isUndergraduate);
            row2.appendChild(isRecruiting);
            row3.appendChild(entryYear);
            row3.appendChild(studyLength);
            row3.appendChild(hasFoundation);
            row4.appendChild(isFullTime);
            row4.appendChild(courseDescription);
            
    
            courseList.appendChild(row1);
            courseList.appendChild(row2);
            courseList.appendChild(row3);
            courseList.appendChild(row4);
    
    
    
            // row.appendChild(nameCell);
            //     row.appendChild(emailCell);
            //     staffTable.appendChild(row);
    
    
    
    
    
          });
      })
          .catch(error => {
              console.error("Error loading JSON:", error);
              // Handle errors here
          });
        });
    };
    return(
        <div className="courseLists">
            <div className="infoBox" id="courseListBox">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Computing Courses</th>
                        </tr>
                    </thead>
                    <tbody id="computingCoursesData">

                    </tbody>
                </table>
            </div>
            <div className="infoBox" id="courseListBox">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Design Courses</th>
                        </tr>
                    </thead>
                    <tbody id="designCoursesData">

                    </tbody>
                </table>
            </div>
        

        </div>
    )
}
export default CourseList;