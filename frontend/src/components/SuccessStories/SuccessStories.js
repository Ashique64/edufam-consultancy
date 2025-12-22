"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SuccessStories.scss";

const SuccessStories = () => {
    const successStories = [
        {
            id: 1,
            studentName: "Hadiya Vadakkeparambil",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-1.png",
            certificatePDF: "/Images/certificates/pdf-1.pdf",
            year: "2025",
            grade: "Admitted for Winter Term 2025",
            rating: 5,
            review: "The entire admission process was handled with remarkable attention to detail. From university selection to final confirmation, I felt supported and confident at every stage. Their expertise made my admission to Justus Liebig University Giessen a smooth and rewarding experience.",
        },
        {
            id: 2,
            studentName: "Musthafa Muhammed",
            course: "Management and Information Technology",
            university: "Westsächsische Hochschule Zwickau",
            certificateImage: "/Images/certificates/certificate-4.png",
            certificatePDF: "/Images/certificates/pdf-4.pdf",
            year: "2023",
            grade: "Admitted for Winter Term 2023",
            rating: 5,
            review: "Clear communication and timely guidance made the entire admission process stress-free. Every step was well explained, and I always knew what to do next. Thanks to their consistent support, I secured my admission without any delays or confusion.",
        },
        {
            id: 3,
            studentName: "Shibil Muhammed",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-2.png",
            certificatePDF: "/Images/certificates/pdf-2.pdf",
            year: "2025",
            grade: "Admitted for Winter Term 2025",
            rating: 5,
            review: "What stood out most was the personalized guidance I received throughout my application. The team ensured that every requirement was met on time, making my admission to Justus Liebig University Giessen both smooth and reassuring.",
        },
        {
            id: 4,
            studentName: "Muhammed Rauf",
            course: "Master of Science (M.Sc.) in Mechanical Engineering",
            university: "Universität Duisburg-Essen",
            certificateImage: "/Images/certificates/certificate-5.png",
            certificatePDF: "/Images/certificates/pdf-5.pdf",
            year: "2022",
            grade: "Admitted for German Language",
            rating: 5,
            review: "The guidance I received was structured, honest, and extremely helpful—especially regarding language requirements and future enrollment. The team kept everything transparent and organized, which made my admission process with Universität Duisburg-Essen smooth and reliable.",
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const renderStars = (rating) =>
        [...Array(5)].map((_, i) => <FaStar key={i} className={i < rating ? "star filled" : "star"} />);

    const openPDF = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="success-stories parallax-design" id="success-stories">
            <div className="row title-row">
                <div className="col-12 title-col">
                    <div className="badge-container" data-aos="fade-up">
                        <span className="badge-text">Testimonials</span>
                    </div>
                    {/* Title */}
                    <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
                        Student Success <span className="highlight">Stories</span>
                    </h2>

                    {/* Decorative Divider */}
                    <div className="divider" data-aos="fade-up" data-aos-delay="150">
                        <span className="line"></span>
                        <span className="icon">⚭</span>
                        <span className="line"></span>
                    </div>

                    {/* Description */}
                    <p className="section-description" data-aos="fade-up" data-aos-delay="200">
                        See how students achieved their study-in-Germany goals with our guidance.
                    </p>
                </div>
            </div>

            <div className="carousel-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                    }}
                    className="success-swiper"
                >
                    {successStories.map((story, index) => (
                        <SwiperSlide key={story.id}>
                            <div className="story-card" data-aos="fade-up" data-aos-delay={100}>
                                <div className="card-inner">
                                    <div className="card-left">
                                        <div className="certificate-wrapper" onClick={() => openPDF(story.certificatePDF)}>
                                            <img src={story.certificateImage} alt={`${story.studentName} certificate`} />
                                            <div className="image-overlay">
                                                <FaExternalLinkAlt className="overlay-icon" />
                                                <p>View Certificate</p>
                                            </div>
                                            <div className="verified-badge">
                                                <FaCheckCircle className="badge-icon" />
                                                <span>Verified Admission</span>
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

                {/* Custom Navigation Buttons */}
                <div className="custom-navigation">
                    <button className="custom-prev" aria-label="Previous slide">
                        <FaChevronLeft />
                    </button>
                    <button className="custom-next" aria-label="Next slide">
                        <FaChevronRight />
                    </button>
                </div>

                {/* Custom Pagination */}
                <div className="custom-pagination"></div>
            </div>
        </div>
    );
};

export default SuccessStories;
