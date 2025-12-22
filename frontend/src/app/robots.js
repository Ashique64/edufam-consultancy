export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://edufam.in/sitemap.xml",
    };
}
