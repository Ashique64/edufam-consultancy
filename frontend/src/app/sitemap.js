export default function sitemap() {
    const baseUrl = "https://edufam.in";

    const staticRoutes = ["", "/about"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 1,
    }));

    // In a real app, you might fetch these from an API
    const courseCategories = [
        "Engineering & Technology",
        "Business & Management",
        "Science & Research",
        "Health & Medicine",
        "Arts & Design",
        "Technology & AI",
    ];

    const courseRoutes = courseCategories.map((category) => ({
        url: `${baseUrl}/courses/${encodeURIComponent(category)}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...courseRoutes];
}
