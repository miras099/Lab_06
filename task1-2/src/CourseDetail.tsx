import { useLoaderData, useParams } from "react-router-dom";
import type { Course } from "./data";

function CourseDetail() {
  const { id } = useParams();

  const data = useLoaderData() as { course: Course };
  const { course } = data;

  return (
    <div>
      <h1>{course.title}</h1>
      <p><b>Instructor:</b> {course.instructor}</p>
      <p>{course.description}</p>
      <p><b>Route ID parameter:</b> {id}</p>
    </div>
  );
}

export default CourseDetail;