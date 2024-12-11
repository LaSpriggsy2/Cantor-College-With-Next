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
            
                        <React.Fragment key={item.id}>

                    <tr >
                        <td>
                            {item.CourseTitle} {item.NoLongerRecruiting==="true"?" (Not Recruiting)":""}
                        </td>
                        <td>
                            {item.CourseAwardName}
                        </td>
                        
                        
                    </tr>
                    <Link href={`course/${item.id}`}>Find Out More</Link>
                
                 </React.Fragment>
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
                    <tbody id="computingCoursesData">
                        {computingCourses.map((item)=> SetCourseList(item))}
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
                    {designCourses.map((item)=> SetCourseList(item))}
                    </tbody>
                </table>
            </div>
        

        </div>
    );
};
export default CourseList;