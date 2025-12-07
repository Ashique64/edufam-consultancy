"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Course2.scss";

gsap.registerPlugin(ScrollTrigger);

const Course2 = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const router = useRouter();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const courseCategories = [
        {
            id: 1,
            title: "Engineering & Technology",
            subtitle: "Innovate the Future",
            description: "Master advanced engineering principles in world-class German institutions.",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Business & Management",
            subtitle: "Lead with Confidence",
            description: "Develop strategic leadership skills for the global business market.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Science & Research",
            subtitle: "Discover the Unknown",
            description: "Engage in groundbreaking research and scientific discovery.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Health & Medicine",
            subtitle: "Heal the World",
            description: "Pursue excellence in medical sciences and healthcare practices.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 5,
            title: "Arts & Design",
            subtitle: "Create & Inspire",
            description: "Unleash your creativity in Germany's vibrant artistic landscape.",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
        },
        {
            id: 6,
            title: "Technology & AI",
            subtitle: "Shape Tomorrow",
            description: "Dive into the cutting-edge world of AI and digital transformation.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    const handleCategoryClick = (categoryTitle) => {
        router.push(`/courses/${encodeURIComponent(categoryTitle)}`);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.from(".section-header", {
                scrollTrigger: {
                    trigger: ".section-header",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Animate Cards Stagger
            gsap.from(".course-card", {
                scrollTrigger: {
                    trigger: ".courses-grid",
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="course2-section" id="courses" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Academic Programs</span>
                    <h2 className="section-title">Explore Your Path</h2>
                    <div className="divider">
                        <span className="line"></span>
                        <span className="icon">⚭</span>
                        <span className="line"></span>
                    </div>
                    <p className="section-description">
                        Choose from a diverse range of disciplines designed to launch your global career.
                    </p>
                </div>

                <div className="courses-grid">
                    {courseCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`course-card ${hoveredCard === category.id ? "hovered" : ""}`}
                            onMouseEnter={() => setHoveredCard(category.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleCategoryClick(category.title)}
                        >
                            <img src={category.image} alt={category.title} className="card-bg-image" />
                            <div className="card-overlay"></div>

                            <div className="card-content">
                                <span className="card-subtitle">{category.subtitle}</span>
                                <h3 className="card-title">{category.title}</h3>
                                <div className="card-hidden-content">
                                    <p className="card-description">{category.description}</p>
                                    <button className="card-link">
                                        View Programs <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Course2;
