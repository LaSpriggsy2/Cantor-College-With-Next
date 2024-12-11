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
      <table className="singleCourseTable">
        <tbody>
          <tr>
            <td>{course.CourseAwardName}</td>
            <td>{course.CourseSubject}</td>
            <td></td>
          </tr>
          <tr>
            <td>{course.CourseSummary}</td>
          </tr>
          <tr>
            <td>{course.CourseType}</td>
            <td>{course.HasFoundationYear==="true"?"Has Foundation Year":"No Foundation Year"}</td>
            <td>{course.NoLongerRecruiting==="false"?"Recruiting":"Not Recruiting"}</td>
          </tr>
        </tbody>
      </table>
      <div className="courseDetailsItems">
      <div className="courseDetailsItem">Entry Year: {course.YearOfEntry}<br></br>Study Length: {course.StudyLength} <br></br>{course.ModeOfAttendance}</div>
      <div className="courseDetailsItem">Ucas Code: {course.UcasCode==="None"?"N/A":course.UcasCode} <br></br>Ucas Points: {course.UcasPoints}</div>
      </div>
      <p>
        <Link href='/'>Back to Course Lists</Link>
      </p>
    </div>
    
  );
};
export default CourseDetails;
