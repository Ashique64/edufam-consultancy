import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://edufam.in"; // Replace with your actual domain

export const metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "EduFam - Your Trusted Partner for German Education & Study Abroad",
        template: "%s | EduFam",
    },
    description:
        "EduFam provides expert guidance for studying in Germany. Get end-to-end support for university admissions, visa processing, and settlement in Germany. 500+ success stories with 98% visa approval rate.",
    keywords: [
        "study in Germany",
        "German education",
        "abroad studies",
        "university admission Germany",
        "visa consultation",
        "education consultancy",
        "German language courses",
        "student visa Germany",
    ],
    authors: [{ name: "EduFam Team" }],
    creator: "EduFam consultancy",
    publisher: "EduFam consultancy",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: "EduFam - Your Trusted Partner for German Education & Study Abroad",
        description:
            "Expert guidance for studying in Germany. University admissions, visa processing, and settlement support.",
        url: baseUrl,
        siteName: "EduFam",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EduFam - Study Abroad in Germany",
        description: "Expert guidance for your German education journey.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SmoothScroll>
                    {children}
                    <WhatsAppButton
                        phoneNumber="919074506060"
                        message="Hi! I'd like to know more."
                        size={60}
                        bottom={24}
                        right={14}
                    />
                </SmoothScroll>
            </body>
        </html>
    );
}
