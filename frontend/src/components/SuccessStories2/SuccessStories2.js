"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "./SuccessStories2.scss";

gsap.registerPlugin(ScrollTrigger);

const SuccessStories2 = () => {
    const sectionRef = useRef(null);

    const successStories = [
        {
            id: 1,
            studentName: "Hadiya Vadakkeparambil",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-1.png",
            certificatePDF: "/Images/certificates/pdf-1.pdf",
            year: "2025",
            grade: "Admitted",
            rating: 5,
            review: "The support I received was incredible! From shortlisting universities to securing my admission at Justus Liebig University Giessen, the entire process was handled smoothly and professionally.",
        },
        {
            id: 2,
            studentName: "Muhammadu Farooqu",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-3.png",
            certificatePDF: "/Images/certificates/pdf-3.pdf",
            year: "2024",
            grade: "Admitted",
            rating: 5,
            review: "Securing admission for my Master's was a dream come true. The consultancy team guided me through every step — from documents to ensure timely enrollment. Stress-free and successful.",
        },
        {
            id: 3,
            studentName: "Shibil Muhammed",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-2.png",
            certificatePDF: "/Images/certificates/pdf-2.pdf",
            year: "2025",
            grade: "Admitted",
            rating: 5,
            review: "I'm thrilled to have received my admission! The consultancy team made the entire journey — from choosing the right program to final enrollment — absolutely seamless. Highly recommended!",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".section-header", {
                scrollTrigger: {
                    trigger: ".section-header",
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".story-card", {
                scrollTrigger: {
                    trigger: ".swiper",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const renderStars = (rating) =>
        [...Array(5)].map((_, i) => <FaStar key={i} className={i < rating ? "star filled" : "star"} />);

    const openPDF = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <section className="success-stories-2" id="success-stories" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Student Voices</span>
                    <h2 className="section-title">Success Stories</h2>
                    <div className="divider">
                        <span className="line"></span>
                        <span className="icon">⚭</span>
                        <span className="line"></span>
                    </div>
                    <p className="section-description">
                        Real stories from students who achieved their dreams of studying in Germany.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    className="success-swiper"
                >
                    {successStories.map((story) => (
                        <SwiperSlide key={story.id}>
                            <div className="story-card">
                                <div className="card-inner">
                                    <div className="card-left">
                                        <div className="certificate-wrapper" onClick={() => openPDF(story.certificatePDF)}>
                                            <img src={story.certificateImage} alt={`${story.studentName} certificate`} />
                                            <div className="image-overlay">
                                                <FaExternalLinkAlt className="overlay-icon" />
                                                <p>View Certificate</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-right">
                                        <div className="student-info">
                                            <h3 className="student-name">{story.studentName}</h3>
                                            <p className="course">{story.course}</p>
                                            <p className="university">{story.university}</p>
                                            <div className="meta-info">
                                                <span className="year">{story.year}</span>
                                                <span className="grade">{story.grade}</span>
                                            </div>
                                        </div>

                                        <div className="review-content">
                                            <FaQuoteLeft className="quote-icon" />
                                            <div className="rating">{renderStars(story.rating)}</div>
                                            <p className="review-text">{story.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SuccessStories2;
