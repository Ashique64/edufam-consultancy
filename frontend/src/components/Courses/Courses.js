"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import "./Courses.scss";

const Courses = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const router = useRouter();

    const courseCategories = [
        {
            id: 1,
            title: "Engineering & Technology",
            description: "Advanced technical programs in various engineering disciplines",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-1.jpg",
        },
        {
            id: 2,
            title: "Business & Management",
            description: "Comprehensive business and management programs",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-2.jpg",
        },
        {
            id: 3,
            title: "Science & Research",
            description: "Scientific research and analytical programs",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-3.jpg",
        },
        {
            id: 4,
            title: "Health & Medicine",
            description: "Medical and healthcare professional programs",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-4.jpg",
        },
        {
            id: 5,
            title: "Arts & Design",
            description: "Creative and architectural design programs",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-5.jpg",
        },
        {
            id: 6,
            title: "Technology & AI",
            description: "Cutting-edge technology and AI programs",
            bgGradient: "linear-gradient(135deg, #031e76 0%, #0a3ba3 50%, #1c5cff 100%)",
            border: "1px solid #e8ecef",
            image: "/Images/course/img-6.jpg",
        },
    ];

    const handleCategoryClick = (categoryTitle) => {
        router.push(`/courses/${encodeURIComponent(categoryTitle)}`);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 100,
            delay: 0,
            startEvent: "DOMContentLoaded",
            anchorPlacement: "top-bottom",
        });

        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="courses" id="courses">
            <div className="gradient-overlay d-none d-lg-block"></div>

            <div className="course-container">
                <div className="row title-row">
                    <div className="col-12 title-col">
                        {/* Title */}
                        <h2 className="section-title">Programs We Offer</h2>

                        {/* Decorative Divider */}
                        <div className="divider">
                            <span className="line"></span>
                            <span className="icon">⚭</span>
                            <span className="line"></span>
                        </div>

                        {/* Description */}
                        <p className="section-description">
                            A curated selection of courses to guide your academic journey.
                        </p>
                    </div>
                </div>

                <div className="row categories-row px-lg-5">
                    {courseCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="col-lg-4 col-md-6 col-sm-6 mb-4"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="1400"
                            data-aos-easing="ease-out-cubic"
                        >
                            <div
                                className="category-card h-100"
                                onMouseEnter={() => setHoveredCard(category.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="category-image-wrapper">
                                    <img src={category.image} alt={category.title} className="category-image" />
                                </div>

                                {/* Title */}
                                <div className="category-header">
                                    <h3 className="category-title">{category.title}</h3>
                                </div>

                                {/* Description only */}
                                <p className="category-description">{category.description}</p>

                                {/* Footer with only button */}
                                <div className="category-footer">
                                    <button
                                        onClick={() => handleCategoryClick(category.title)}
                                        className="category-btn"
                                        style={{
                                            background: category.bgGradient,
                                            border: "none",
                                        }}
                                    >
                                        Explore Programs
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
