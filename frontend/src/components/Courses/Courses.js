"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
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
                        <div className="badge-container" data-aos="fade-up">
                            <span className="badge-text">Our Programs</span>
                        </div>
                        {/* Title */}
                        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
                            Explore Our Top <span className="highlight">Courses</span>
                        </h2>

                        {/* Decorative Divider */}
                        <div className="divider" data-aos="fade-up" data-aos-delay="150">
                            <span className="line"></span>
                            <span className="icon">⚭</span>
                            <span className="line"></span>
                        </div>

                        {/* Description */}
                        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
                            A curated selection of courses to guide your academic journey.
                        </p>
                    </div>
                </div>

                <div className="row categories-row px-lg-5">
                    {courseCategories.map((category, index) => (
                        <div key={category.id} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div
                                className="category-card h-100"
                                onMouseEnter={() => setHoveredCard(category.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => handleCategoryClick(category.title)}
                            >
                                <div className="category-image-wrapper">
                                    <img src={category.image} alt={category.title} className="category-image" />
                                    <div className="overlay"></div>
                                </div>

                                <div className="category-content">
                                    {/* Title */}
                                    <h3 className="category-title">{category.title}</h3>

                                    {/* Description */}
                                    <p className="category-description">{category.description}</p>

                                    {/* Footer with arrow link */}
                                    <div className="category-footer">
                                        <span className="learn-more">
                                            Learn More <FaArrowRight className="ms-2 arrow-icon" />
                                        </span>
                                    </div>
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
