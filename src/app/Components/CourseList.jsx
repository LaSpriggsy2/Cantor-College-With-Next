"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
            <ul key={item.id} className="courseList">

            {/* // <tbody id="designCoursesData" key={item.id}> */}
                
                        {/* <React.Fragment key={item.id}> */}

                    
                            <li className="courseListItem">{item.CourseTitle}
                        
                            {item.CourseAwardName} {item.NoLongerRecruiting==="true"?" (Not Recruiting)":""}</li>
                        
                        
                        
                    
                    <Link href={`course/${item.id}`}>Find Out More</Link>
                
                 {/* </React.Fragment> */}
                 {/* </tbody> */}
            </ul>
            );
    return(
        <div className="courseLists">
            <div className="infoBox" id="courseListBox">
                <div className="table">
                    
                        
                            <h4>Computing Courses</h4>
                        
                    {/* <tbody id="computingCoursesData"> */}
                        {computingCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </div>
            </div>
            <div className="infoBox" id="courseListBox">
                <div className="table">
                    
                            <h4>Design Courses</h4>
                        
                    {/* <tbody id="designCoursesData"> */}
                    {designCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </div>
            </div>
        

        </div>
    );
};
export default CourseList;