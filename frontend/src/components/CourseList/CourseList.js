"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../Preloader/Preloader";
import "./CourseList.scss";

const CourseList = () => {
    const params = useParams();
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    const [categoryData, setCategoryData] = useState(null);

    const categoryTitle = params.categoryTitle;

    const handleWhatsAppRedirect = (text = "Hi! I'd like to know more.") => {
        const phone = "919074506060";
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
    };

    const courseDatabase = {
        "Engineering & Technology": {
            image: "/Images/course/img-1.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "Biomechanical Engineering",
                "Chemical and Energy Engineering",
                "Computational Methods in Engineering",
                "Digital Engineering",
                "Electrical Engineering and Information Technology",
                "Engineering Science (Bachelor)",
                "Master of Engineering in Electrical Engineering",
                "Information and Communication Engineering",
                "Master of Science in Advanced Materials and Manufacturing (Research Master's)",
                "Mechanical Engineering (Bachelor)",
                "Systems Engineering in Manufacturing",
                "Electrical Engineering and Information Technology — International Master of Science",
                "Computer Engineering",
                "Master of Science in Computer Engineering",
            ],
        },
        "Business & Management": {
            image: "/Images/course/img-2.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "International Business Administration",
                "Master's in International Management",
                "Operation and Management of Maritime Systems",
                "Business & Economics",
                "Business Administration",
                "BSc in International Business (Bachelor)",
                "Business and Psychology",
                "Entrepreneurship & Innovation Management",
                "Aviation Management",
                "European Business Management",
                "MA International Management Studies",
                "BA Data Science & Business",
            ],
        },
        "Science & Research": {
            image: "/Images/course/img-3.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "International PhD Programme at the German Cancer Research Center",
                "International Max Planck Research School for Molecular Organ Biology",
                "Master of Science in Photonics",
                "Master of Science in Computer Science",
                "Biology",
                "Physics",
                "Chemistry",
                "Data Science",
                "Data Science and Machine Learning, MSc",
                "Master of Science in Information Systems",
            ],
        },
        "Health & Medicine": {
            image: "/Images/course/img-4.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "PhD Genomic and Molecular Medicine - Personalised Approaches to Childhood Health",
                "MBA & Engineering in Life Science Management",
                "MBA International Healthcare Management",
                "Master of Science in Applied Health Informatics and Digital Medicine",
                "Pharmaceutical Medicine (MSc)",
                "Graduate School Science, Medicine and Technology",
                "Global Health (Bachelor)",
                "Pharmaceutical Medicine (MSc)",
                "Bioanalytical Chemistry and Pharmaceutical Analysis",
                "Nursing (BSc)",
            ],
        },
        "Arts & Design": {
            image: "/Images/course/img-5.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "Research in Design, Art and Media (Master of Arts)",
                "Media Art and Design, MFA",
                "Visual Journalism and Documentary Photography",
                "Design Entrepreneurship",
                "MA Interior Design",
                "Design Management (MA)",
                "MA Interior Architecture / Interior Design",
                "BA Graphic Design & Visual Communication",
                "Master of Arts in Creative Direction",
                "Sustainability in Fashion and Creative Industries (MA)",
                "Photography (MA)",
            ],
        },
        "Technology & AI": {
            image: "/Images/course/img-6.jpg",
            bgGradient: "linear-gradient(135deg, #24507b 0%, #102e50 100%)",
            courses: [
                "AI Engineering of Autonomous Systems",
                "Engineering and Sustainable Technology Management – Industry 4.0: Automation, Robotics & 3D Manufacturing",
                "Artificial Intelligence",
                "Data Science and Artificial Intelligence",
                "Computer Science and Artificial Intelligence",
                "Mobile Robotics",
                "AI & Robotics",
                "Introduction to Business Data Science with Python",
                "Digital Games (Master of Arts)",
                "Game Programming in Python",
                "Cyber Security",
                "Master of Science in Enterprise and IT Security",
                "Machine Learning (MSc)",
                "Textile Machinery and High Performance Material Technology",
            ],
        },
    };

    useEffect(() => {
        if (categoryTitle) {
            const decodedCategoryTitle = decodeURIComponent(categoryTitle);

            if (decodedCategoryTitle && courseDatabase[decodedCategoryTitle]) {
                setCategoryData(courseDatabase[decodedCategoryTitle]);
                setCourses(courseDatabase[decodedCategoryTitle].courses);
            } else {
                console.log("Category not found:", decodedCategoryTitle);
            }
        }

        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 100,
        });
        AOS.refresh();
        return () => AOS.refresh();
    }, [categoryTitle]);

    const handleBackClick = () => router.back();

    const handleConsultationClick = () => {
        handleWhatsAppRedirect();
    };

    if (!categoryData) {
        return <Preloader />;
    }

    return (
        <div className="course-list" id="course-list">
            <div className="gradient-overlay"></div>

            <button className="back-button" onClick={handleBackClick} data-aos="fade-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className="back-text">Back to Categories</span>
            </button>

            <div className="container course-list-container p-0">
                {/* Header Section */}
                <div className="category-header-section" data-aos="fade-up">
                    <div className="category-image-container">
                        <img src={categoryData.image} alt={categoryTitle} className="category-hero-image" />
                        <div className="category-overlay">
                            <h1 className="category-main-title">{decodeURIComponent(categoryTitle)}</h1>
                            <div className="category-subtitle">
                                <span className="course-count">Top Programs</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIMPLE TABLE WITHOUT LEVEL & DURATION */}
                <div className="courses-responsive-table">
                    <div className="courses-table-section">
                        <div className="section-header" data-aos="fade-up">
                            <h2 className="courses-table-title">Available Programs</h2>
                            <p className="courses-table-subtitle">
                                Explore programs in {decodeURIComponent(categoryTitle)}
                            </p>
                        </div>

                        <div className="table-wrapper">
                            <table className="course-table" data-aos="fade-up">
                                <thead>
                                    <tr>
                                        <th className="serial-col">#</th>
                                        <th className="program-col">Program Name</th>
                                        <th className="actions-col">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {courses.map((course, idx) => (
                                        <tr key={idx} data-aos="fade-up">
                                            <td className="serial-cell">{idx + 1}</td>

                                            <td
                                                className="course-name mobile-clickable"
                                                onClick={() => handleWhatsAppRedirect(`Hi! I'm interested in ${course}`)}
                                            >
                                                {course}
                                            </td>

                                            <td className="actions-cell">
                                                <div className="action-buttons">
                                                    <button
                                                        className="eligibility-btn"
                                                        onClick={() =>
                                                            handleWhatsAppRedirect(`Hi! I'm interested in ${course}`)
                                                        }
                                                    >
                                                        Check Eligibility
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* New Enquiry Section */}
                        <div className="more-programs-section" data-aos="fade-up">
                            <p className="more-text">For more programs</p>
                            <button
                                className="enquiry-btn"
                                onClick={() => handleWhatsAppRedirect("Hi! I'd like to enquire about more programs.")}
                            >
                                Enquiry
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cta-container">
                    <div className="cta-section" data-aos="fade-up">
                        <div className="cta-content">
                            <h3 className="cta-title">Ready to Start Your Journey?</h3>
                            <p className="cta-description">Get personalized guidance and start your application today.</p>
                            <div className="cta-buttons">
                                <button className="cta-primary-btn" onClick={handleConsultationClick}>
                                    Get Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseList;
