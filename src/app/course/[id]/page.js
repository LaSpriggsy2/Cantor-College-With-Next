import { fetchCourseDetails } from "@/app/lib/db";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await fetchCourseDetails(id);
  return {
    title: `${course.CourseTitle}:`,
  };
}
const CourseDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const courseDetails = await fetchCourseDetails(id);
  console.dir(courseDetails);
  return (
    <div className='infoBox'>
      <h2>
        Staff Details: {course.CourseTitle} 
      </h2>
      <p>
        <Link href='/CourseList'>Back to Course Lists</Link>
      </p>
      <p>
        <br />
        {/* Department: {staffDetails.department} */}
        <br />
        <br />
        {/* Country: {staffDetails.country} */}
      </p>
    </div>
  );
};
export default CourseDetails;
