import { fetchCourseDetails } from "@/app/lib/db";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { id } = await params;
  // console.dir(id);
  const course = await fetchCourseDetails(id);
  return {
    title: `${course.CourseTitle}:`,
  };
}
const CourseDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const course = await fetchCourseDetails(id);
  console.dir(course);

  return (
    <div className='infoBox'>
      <h2>
       {course.CourseTitle} 
      </h2>
      <div>Entry Year: {course.YearOfEntry}<br></br>Study Length: {course.StudyLength} <br></br>{course.ModeOfAttendance}</div>
      <div>Ucas Code: {course.UcasCode==="None"?"N/A":course.UcasCode} <br></br>Ucas Points: {course.UcasPoints}</div>
      <table className="singleCourseTable">
        <tbody>
          <tr>
            <td>{course.CourseAwardName}</td>
            <td></td>
            <td>{course.CourseSubject}</td>
          </tr>
          <tr>
            <td>{course.CourseSummary}</td>
            <td>{course.CourseType}</td>
            <td></td>
          </tr>
          <tr>
            <td>{course.HasFoundationYear==="true"?"Has Foundation Year":"No Foundation Year"}</td>
            <td>{course.NoLongerRecruiting==="false"?"Recruiting":"Not Recruiting"}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Link href='/'>Back to Course Lists</Link>
      </p>
    </div>
    
  );
};
export default CourseDetails;
