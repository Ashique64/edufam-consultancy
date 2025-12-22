"use client";
import React, { useEffect, useState } from "react";
import { FaStar, FaUsers, FaGraduationCap, FaHandshake, FaGlobe, FaAward, FaHeadset, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChoose.scss";

const WhyChoose = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const PRIMARY = "var(--secondary-color)";
    const ICON_GRADIENT = "var(--primary-dark";

    const reasons = [
        {
            id: 1,
            title: "Expert Guidance",
            description: "Our experienced consultants provide personalized guidance throughout your journey to Germany.",
            icon: <FaUsers />,
            color: PRIMARY,
            bgGradient: ICON_GRADIENT,
            stats: { number: "200+", label: "Students Guided" },
        },
        {
            id: 2,
            title: "High Success Rate",
            description: "100% visa approval rate with our comprehensive application preparation and support.",
            icon: <FaChartLine />,
            color: PRIMARY,
            bgGradient: ICON_GRADIENT,
            stats: { number: "100%", label: "Success Rate" },
        },

        {
            id: 3,
            title: "End-to-End Support",
            description: "Complete assistance from course selection to settling in Germany with ongoing support.",
            icon: <FaHandshake />,
            color: PRIMARY,
            bgGradient: ICON_GRADIENT,
            stats: { number: "24/7", label: "Support Available" },
        },
        {
            id: 4,
            title: "Global Network",
            description: "Extensive network in Germany providing accommodation and settlement assistance.",
            icon: <FaGlobe />,
            color: PRIMARY,
            bgGradient: ICON_GRADIENT,
            stats: { number: "15+", label: "German Cities" },
        },
    ];

    const achievements = [
        { icon: <FaAward />, number: "200+", label: "Success Stories", color: "#3f51b5" },
        { icon: <FaUsers />, number: "500+", label: "Happy Students", color: "#3f51b5" },
        { icon: <FaGraduationCap />, number: "50+", label: "University Partners", color: "#3f51b5" },
        { icon: <FaGlobe />, number: "15+", label: "German Cities", color: "#3f51b5" },
    ];

    const testimonials = [
        {
            name: "Shibil Muhammed",
            image: "/Images/visa/visa-1.jpeg",
        },
        {
            name: "Muhammadu Farooqu",
            image: "/Images/visa/visa-2.jpeg",
        },
        {
            name: "Haniya",
            image: "/Images/visa/visa-3.jpeg",
        },
    ];

    const handleConsultationClick = () => {
        const phone = "919074506060";
        const text = encodeURIComponent("Hi! I'd like to know more.");
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    };

    useEffect(() => {
        // Initialize AOS only on client side
        if (typeof window !== "undefined") {
            AOS.init({
                duration: 1200,
                easing: "ease-out-cubic",
                once: false,
                mirror: true,
                offset: 100,
                delay: 0,
                startEvent: "DOMContentLoaded",
                anchorPlacement: "top-bottom",
            });

            AOS.refresh();

            const testimonialInterval = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 5000);

            return () => {
                AOS.refresh();
                clearInterval(testimonialInterval);
            };
        }
    }, [testimonials.length]);

    return (
        <div className="why-choose" id="why-choose">
            {/* <div className="gradient-overlay" /> */}
            {/* <div className="background-grid" /> */}

            <div className="container why-container">
                <div className="row title-row">
                    <div className="col-12 title-col">
                        <div className="badge-container" data-aos="fade-up">
                            <span className="badge-text">Why Us</span>
                        </div>
                        {/* Title */}
                        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
                            Why Choose <span className="highlight">EduFam</span>
                        </h2>

                        {/* Decorative Divider */}
                        <div className="divider" data-aos="fade-up" data-aos-delay="150">
                            <span className="line"></span>
                            <span className="icon">⚭</span>
                            <span className="line"></span>
                        </div>

                        {/* Description */}
                        <p className="section-description" data-aos="fade-up" data-aos-delay="200">
                            Your trusted partner for German education with proven excellence and personalized care
                        </p>
                    </div>
                </div>

                {/* Achievements row */}
                <div className="row achievements-row mb-5">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                        >
                            <div className="achievement-card">
                                <div className="achievement-icon" style={{ color: achievement.color }}>
                                    {achievement.icon}
                                </div>
                                <div className="achievement-number" style={{ color: achievement.color }}>
                                    {achievement.number}
                                </div>
                                <div className="achievement-label">{achievement.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row main-content-row">
                    <div className="col-lg-8 col-12">
                        <div className="row reasons-grid">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason.id}
                                    className="col-lg-6 col-md-6 col-12 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    data-aos-duration="1200"
                                >
                                    <div
                                        className={`reason-card ${activeCard === reason.id ? "active" : ""}`}
                                        onMouseEnter={() => setActiveCard(reason.id)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        <div className="reason-bg-icon">{reason.icon}</div>
                                        <div className="reason-header">
                                            <div className="reason-icon" style={{ background: reason.bgGradient }}>
                                                {reason.icon}
                                            </div>
                                            <div className="reason-stats">
                                                <span className="stats-number" style={{ color: reason.color }}>
                                                    {reason.stats.number}
                                                </span>
                                                <span className="stats-label">{reason.stats.label}</span>
                                            </div>
                                        </div>
                                        <h3 className="reason-title">{reason.title}</h3>
                                        <p className="reason-description">{reason.description}</p>
                                        <div className="reason-border" style={{ background: reason.bgGradient }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4 col-12">
                        <div
                            className="testimonial-section"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="1200"
                        >
                            <h3 className="testimonial-header">
                                <FaStar className="star-icon" />
                                Visa Success
                            </h3>

                            <div className="testimonial-carousel">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`testimonial-card ${index === currentTestimonial ? "active" : ""}`}
                                    >
                                        <div className="testimonial-content image-content">
                                            <div className="image-container">
                                                <img
                                                    src={testimonial.image}
                                                    alt={`Visa success of ${testimonial.name}`}
                                                    className="visa-image"
                                                />
                                            </div>
                                            <div className="testimonial-meta mt-3">
                                                <span className="name">{testimonial.name}</span>
                                                <span className="course highlight-text">Visa Approved</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="testimonial-dots">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === currentTestimonial ? "active" : ""}`}
                                        onClick={() => setCurrentTestimonial(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row cta-row mt-5">
                    <div className="col-12 text-center">
                        <div className="cta-section" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
                            <h3 className="cta-title">Ready to Begin Your Journey?</h3>
                            <p className="cta-description">
                                Join hundreds of successful students who chose EduFam for their German education dreams
                            </p>
                            <div className="cta-buttons">
                                <button onClick={handleConsultationClick} className="btn btn-primary cta-button">
                                    <FaHeadset />
                                    Book Free Consultation
                                </button>
                                <button className="btn btn-secondary cta-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
