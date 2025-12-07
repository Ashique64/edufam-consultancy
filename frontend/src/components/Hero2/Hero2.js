"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaGraduationCap, FaUsers, FaAward } from "react-icons/fa";
import "./Hero2.scss";

const Hero2 = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.from(".badge", { y: 20, opacity: 0, duration: 0.8 })
                .from(".headline", { y: 30, opacity: 0 }, "-=0.6")
                .from(".subheadline", { y: 30, opacity: 0 }, "-=0.8")
                .from(".cta-group", { y: 20, opacity: 0 }, "-=0.8")
                .from(".visual-content", { x: 50, opacity: 0, duration: 1.2 }, "-=1")
                .from(
                    ".stat-card",
                    {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "back.out(1.7)",
                    },
                    "-=0.5"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section" ref={containerRef}>
            <div className="container">
                <div className="text-content">
                    <span className="badge">Your Gateway to Germany</span>
                    <h1 className="headline">
                        Build Your Future in <span className="highlight">German</span> Universities
                    </h1>
                    <p className="subheadline">
                        Expert guidance for students aspiring to study in Germany. We simplify the admission process, visa
                        support, and settlement to help you achieve your dreams.
                    </p>
                    <div className="cta-group">
                        <Link href="/contact" className="primary-btn">
                            Start Your Journey
                        </Link>
                        <Link href="/courses" className="secondary-btn">
                            Explore Courses
                        </Link>
                    </div>
                </div>

                <div className="visual-content">
                    <div className="composition-wrapper">
                        {/* Main Feature Image */}
                        <div className="main-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Student Success"
                                className="main-image"
                            />
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div className="secondary-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Group Brainstorming"
                                className="secondary-image"
                            />
                        </div>

                        {/* Floating Stat Card 1: Success Rate */}
                        <div className="stat-card stat-card-1">
                            <div className="stat-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="stat-text">
                                <h4>100% Success</h4>
                                <p>Success Rate</p>
                            </div>
                        </div>

                        {/* Floating Stat Card 2: Students Helped */}
                        <div className="stat-card stat-card-2">
                            <div className="stat-icon blue">
                                <FaUsers />
                            </div>
                            <div className="stat-text">
                                <h4>200+</h4>
                                <p>Students Helped</p>
                            </div>
                        </div>

                        {/* Floating Stat Card 3: Experience */}
                        <div className="stat-card stat-card-3">
                            <div className="stat-icon orange">
                                <FaAward />
                            </div>
                            <div className="stat-text">
                                <h4>3+ Years</h4>
                                <p>Experience</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="decorator-circle"></div>
                        <div className="decorator-dots"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
