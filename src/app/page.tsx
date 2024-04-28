import { CreateCourseForm } from "../features/courses-list/pub/create-course-form";
import { CoursesList } from "../features/courses-list/pub/courses-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
