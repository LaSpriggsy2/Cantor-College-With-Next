import Footer from "@/app/Components/Footer";
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
    <body>

    <div className='infoBox' id="singleCourse">
      <h2 id="singleCourseTitle">
       {course.CourseTitle} 
      </h2>
            <p>{course.CourseSummary}</p>
      <table className="singleCourseTable">
        <tbody>
          <tr>
            <td>{course.CourseSubject}</td>{/*Nothing has said I need to (or am even allowed to) alter the text in the assignment package, 
            so for all I know the client might want &rsquo; instead of ' . 
            And since they suposidly don't know anything, they couldn't have known that &rsquo; is for '  */}
            <td id="singleCourseAward">{course.CourseAwardName}</td>
          </tr>
          <tr>
            <td>{course.CourseType}<br></br>
            {course.HasFoundationYear==="true"?"Has Foundation Year":"No Foundation Year"}<br></br>
            {course.NoLongerRecruiting==="false"?"Recruiting":"Not Recruiting"}</td>
          </tr>
        </tbody>
      </table>
      <div className="courseDetailsItems">
      <div className="courseDetailsItem">Entry Year: {course.YearOfEntry}<br></br>Study Length: {course.StudyLength} <br></br>{course.ModeOfAttendance}</div>
      <div className="courseDetailsItem">Ucas Code: {course.UcasCode==="None"?"N/A":course.UcasCode} <br></br>Ucas Points: {course.UcasPoints}</div>
      </div>
      <p>
        <Link className="returnLink" href='/'>Cantor Home</Link>
      </p>
    </div>
   <Footer></Footer> 
    </body>
  );
};
export default CourseDetails;
