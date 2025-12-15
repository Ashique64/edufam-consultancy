import CourseList from "@/components/CourseList/CourseList";

// 🔥 FIXED: params is a Promise → must await
export async function generateMetadata({ params }) {
    const resolvedParams = await params;

    return {
        title: `${resolvedParams.categoryTitle} Courses - EduFam`,
    };
}

export default async function CoursePage({ params }) {
    const resolvedParams = await params;

    return <CourseList categoryTitle={resolvedParams.categoryTitle} />;
}
