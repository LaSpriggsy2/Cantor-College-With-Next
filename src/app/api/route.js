import {
    fetchCourses,
  } from "../lib/db";
  export async function GET() {
    const courses = await fetchCourses();
    return new Response(JSON.stringify(courses));
  }
