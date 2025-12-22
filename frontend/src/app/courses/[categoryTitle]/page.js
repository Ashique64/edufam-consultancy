import CourseList from "@/components/CourseList/CourseList";

// 🔥 FIXED: params is a Promise → must await
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const categoryTitle = decodeURIComponent(resolvedParams.categoryTitle);

    return {
        title: `${categoryTitle} | German Education | EduFam`,
        description: `Explore top-rated ${categoryTitle} courses in Germany. EduFam provides expert guidance and admission support for ${categoryTitle} programs.`,
    };
}

export default async function CoursePage({ params }) {
    const resolvedParams = await params;

    return <CourseList categoryTitle={resolvedParams.categoryTitle} />;
}
