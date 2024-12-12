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

                    
                            <li className="courseListItem">
                                <div className="courseListItemTitle">

                                <p id="courseTitleText">{item.CourseTitle}</p>
                        
                            <p>{item.NoLongerRecruiting==="true"?" (Not Recruiting)":""}</p> 
                                </div>
                                <div className="courseListItemDetails">

                            <p>{item.CourseAwardName}</p>
                    <Link className="courseDetailsLink" target="_blank" href={`course/${item.id}`}>Find Out More</Link>
                                </div>
                            </li>
                        
                        
                        
                    
                
                 {/* </React.Fragment> */}
                 {/* </tbody> */}
            </ul>
            );
    return(
        <div className="courseLists">
            <div className="infoBox" id="courseListBox">
                <div className="table">
                    
                        
                            <h3>Computing Courses</h3>
                        
                    {/* <tbody id="computingCoursesData"> */}
                        {computingCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </div>
            </div>
            <div className="infoBox" id="courseListBox">
                <div className="table">
                    
                            <h3>Design Courses</h3>
                        
                    {/* <tbody id="designCoursesData"> */}
                    {designCourses.map((item)=> SetCourseList(item))}
                    {/* </tbody> */}
                </div>
            </div>
        

        </div>
    );
};
export default CourseList;