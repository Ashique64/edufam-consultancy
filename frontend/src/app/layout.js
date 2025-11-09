import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "EduFam - Your Trusted Partner for German Education & Study Abroad",
    description:
        "EduFam provides expert guidance for studying in Germany. Get end-to-end support for university admissions, visa processing, and settlement in Germany. 500+ success stories with 98% visa approval rate.",
    icons: {
        icon: "/Images/EduFam-Fav.png",
    },
    keywords:
        "study in Germany, German education, abroad studies, university admission Germany, visa consultation, education consultancy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <WhatsAppButton
                    phoneNumber="919074506060"
                    message="Hi! I'd like to know more."
                    size={60}
                    bottom={24}
                    right={14}
                />
            </body>
        </html>
    );
}
