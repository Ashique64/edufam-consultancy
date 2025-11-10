"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
            review: "The support I received was incredible! From shortlisting universities to securing my admission at Justus Liebig University Giessen, the entire process was handled smoothly and professionally. I'm truly grateful for their expert guidance and personalized attention at every step.",
        },
        {
            id: 2,
            studentName: "Muhammadu Farooqu",
            course: "Transition Management mit dem Abschluss Master of Science",
            university: "Justus Liebig University Giessen",
            certificateImage: "/Images/certificates/certificate-3.png",
            certificatePDF: "/Images/certificates/pdf-3.pdf",
            year: "2024",
            grade: "Admitted for Winter Term 2024",
            rating: 5,
            review: "Securing admission to Justus Liebig University Giessen for my Master's in Transition Management was a dream come true. The consultancy team guided me through every step — from preparing my documents to ensuring timely enrollment. Their dedication and clarity made the entire process stress-free and successful.",
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
            review: "I'm thrilled to have received my admission to Justus Liebig University Giessen for the Master's in Transition Management! The consultancy team made the entire journey — from choosing the right program to final enrollment — absolutely seamless. Their expert support helped me achieve my dream of studying in Germany with complete confidence.",
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
                    {/* Title */}
                    <h2 className="section-title">Student Success Stories</h2>

                    {/* Decorative Divider */}
                    <div className="divider">
                        <span className="line"></span>
                        <span className="icon">⚭</span>
                        <span className="line"></span>
                    </div>

                    {/* Description */}
                    <p className="section-description">See how students achieved their study-in-Germany goals with our guidance.</p>
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
