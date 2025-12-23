"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaBullseye,
    FaEye,
    FaHandshake,
    FaGraduationCap,
    FaGlobe,
    FaUsers,
    FaMapMarkerAlt,
    FaHeart,
    FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./About.scss";

const AboutPage = () => {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
    }, []);

    const stats = [
        { number: "500+", label: "Students Guided", icon: FaGraduationCap },
        { number: "50+", label: "Universities Partner", icon: FaGlobe },
        { number: "100%", label: "Success Rate", icon: FaUsers },
        { number: "3+", label: "Years Experience", icon: FaMapMarkerAlt },
    ];

    const missions = [
        {
            icon: FaBullseye,
            title: "Our Mission",
            description:
                "To simplify global education opportunities and make them accessible for every aspiring student through personalized guidance and comprehensive support.",
        },
        {
            icon: FaEye,
            title: "Our Vision",
            description:
                "To be the most trusted educational consulting partner for students seeking international academic growth, particularly in Germany.",
        },
        {
            icon: FaHandshake,
            title: "Our Commitment",
            description:
                "Transparency, integrity, and student-first consulting that ensures success, trust, and lifelong relationships.",
        },
    ];

    const values = [
        {
            icon: FaHeart,
            title: "Transparency",
            description: "Honest communication at each and every step",
        },
        {
            icon: FaHeart,
            title: "Student-First",
            description: "Your success is our primary focus",
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "Modern solutions for educational challenges",
        },
    ];

    const handleBackClick = () => router.back();

    const handleGetStartedClick = () => {
        const phone = "919074506060";
        const text = encodeURIComponent("Hi! I'd like to get started with EduFam consultancy.");
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    };

    return (
        <div className="about-page">
            <button className="back-button" onClick={handleBackClick} data-aos="fade-right" data-aos-duration="800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19 12H5M12 19L5 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="back-text">Back to Home</span>
            </button>
            <div className="about-hero">
                <img src="/Images/about/banner-4.png" alt="About Hero" className="hero-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content" data-aos="fade-down">
                    <div className="hero-text-container">
                        <h1 className="hero-title">About EduFam</h1>
                        <p className="hero-subtitle">Guiding Dreams, Building Futures</p>
                        <div className="hero-location">
                            <FaMapMarkerAlt />
                            <span>Thamarassery, Kerala, India</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="stats-section" data-aos="fade-up">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div className="stat-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 120}>
                                <stat.icon className="stat-icon" />
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-content-section">
                <div className="container about-grid">
                    <div className="about-image" data-aos="fade-right">
                        <img className="about-img-1" src="/Images/about/img-1.png" alt="img-1" />
                        <img className="about-img-2" src="/Images/about/item-2.png" alt="img-2" />
                    </div>

                    <div className="about-text" data-aos="fade-left">
                        <div className="section-header">
                            <h2>Who We Are</h2>
                            <div className="header-line"></div>
                        </div>
                        <div className="text-content">
                            <p className="lead-text">
                                EduFam is a trusted educational consulting company based in Thamarassery, Kerala, India,
                                committed to guiding students toward a successful academic future abroad.
                            </p>
                            <p>
                                With a special focus on higher education opportunities in Germany, we provide personalized
                                counseling and end-to-end support to help students achieve their international study goals.
                            </p>
                            <p>
                                At EduFam, we believe that education is a powerful tool for transformation. Our mission is
                                to make global education accessible by simplifying the admission process, offering expert
                                guidance on university selection, visa assistance, language requirements, and pre-departure
                                preparation.
                            </p>
                            <p>
                                What sets us apart is our student-first approach, in-depth knowledge of the German education
                                system, and dedication to ethical and transparent practices. Whether you&apos;re dreaming of
                                studying engineering, medicine, management, or any other field abroad, EduFam is here to
                                help you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Commitment */}
            <section className="mission-section">
                <div className="container">
                    <div className="section-header centered">
                        <h2>Our Foundation</h2>
                        <p>The principles that drive everything we do</p>
                        <div className="header-line centered"></div>
                    </div>
                    <div className="mission-grid">
                        {missions.map((mission, idx) => (
                            <div className="mission-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 120}>
                                <div className="card-icon-wrapper">
                                    <mission.icon className="mission-icon" />
                                </div>
                                <h3>{mission.title}</h3>
                                <p>{mission.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header centered">
                        <h2>Our Core Values</h2>
                        <p>What makes us different</p>
                        <div className="header-line centered"></div>
                    </div>
                    <div className="values-grid">
                        {values.map((value, idx) => (
                            <div className="value-card" key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 100}>
                                <value.icon className="value-icon" />
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Let EduFam be your companion on your journey to a brighter future through global education.
                            Together, we&apos;ll turn your dreams into reality.
                        </p>
                        <div className="cta-buttons">
                            <button onClick={handleGetStartedClick} className="btn btn-primary">
                                Get Started Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
