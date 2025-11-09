import CourseList from '@/components/CourseList/CourseList'

export async function generateMetadata({ params }) {
  return {
    title: `${params.categoryTitle} Courses - EduFam`,
  }
}

export default function CoursePage({ params }) {
  return <CourseList categoryTitle={params.categoryTitle} />
}