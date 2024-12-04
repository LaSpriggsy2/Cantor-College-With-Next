import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });
  const fetchCourses = async () => {
    try{
const query = "select * from courseList";  
const [rows] = await connection.execute(query); 
return rows;  
} catch (error) {
  console.error("Database Error:", error); 
  throw new Error("Failed to fetch data.");
}
};
const fetchCourseDetails = async (id) => {
  try {

      const query = "SELECT * FROM courseList WHERE id = ?"; 
      const [rows] = await connection.execute(query, [id]); 
      return rows[0] || null;
  } catch (error) {
    console.error("Database Error:", error); 
    throw new Error("Failed to fetch data.");
  }
};
export {fetchCourses, fetchCourseDetails};