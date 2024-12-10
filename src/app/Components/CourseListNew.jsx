"use client"
import React, { useState, useEffect } from "react";
const CourseList = ({courseListData}) =>{
        const [computingCourses, SetComputingCourses] = useState([]);
        const [designCourses, SetDesignCourses] = useState([]);
        useEffect(()=> {
            const computing = courseListData.filter((item) => item.CourseSubject=== "Computing");
            const design = courseListData.filter((item) => item.CourseSubject=== "Art and design");
    
            SetComputingCourses(computing);
            SetDesignCourses(design);
        }, [courseListData]);

        const SetCourseList = (item) =>(
            
                        <tbody key={item.CourseID}>
                {/* <div> */}
                    <tr >
                        <td>
                            {item.CourseTitle}
                        </td>
                        <td>
                            {item.UcasPoints==="None"?"":item.UcasPoints}
                        </td>
                        <td>
                            {item.UcasCode==="None"?"":item.UcasCode}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {item.CourseAwardName}
                        </td>
                        <td>
                            {item.CourseType}
                        </td>
                        <td>
                            {item.NoLongerRecruiting==="false"?"Recruiting":"Not Recruiting"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {item.YearOfEntry}
                        </td>
                        <td>
                            {item.StudyLength}
                        </td>
                        <td>
                            {item.HasFoundationYear==="true"?"Has Foundation Year":"No Foundation Year"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {item.ModeOfAttendance}
                        </td>
                        <td>
                            {item.CourseSummary}
                        </td>
                    </tr>
                {/* </div> */}
                 </tbody>
            );
    return(
        <div className="courseLists">
            <div className="infoBox" id="courseListBox">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Computing Courses</th>
                        </tr>
                    </thead>
                    {/* <tbody id="computingCoursesData"> */}
                        {computingCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </table>
            </div>
            <div className="infoBox" id="courseListBox">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Design Courses</th>
                        </tr>
                    </thead>
                    {/* <tbody id="designCoursesData"> */}
                    {designCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </table>
            </div>
        

        </div>
    );
};
export default CourseList;