"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import Hero2 from "@/components/Hero2/Hero2";
import Course2 from "@/components/Course2/Course2";
import Courses from "@/components/Courses/Courses";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import HowItWork from "@/components/HowItWork/HowItWork";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import WhyChoose2 from "@/components/WhyChoose2/WhyChoose2";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import SuccessStories2 from "@/components/SuccessStories2/SuccessStories2";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <>
            {loading && <Preloader />}
            <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease-in-out" }}>
                {/* <Navbar /> */}
                {/* <Hero /> */}
                <Hero2 />
                {/* <Courses /> */}
                <Course2 />
                {/* <SuccessStories /> */}
                <SuccessStories2 />
                <HowItWork />
                {/* <WhyChoose /> */}
                <WhyChoose2 />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
