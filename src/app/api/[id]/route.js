import {
    fetchCourseDetails,
  } from "../../lib/db";
  export async function GET(request, { params }) {
    const id = (await params).id 
    console.dir(id);
    const courses = await fetchCourseDetails(id);
    return new Response(JSON.stringify(courses));
  }
  