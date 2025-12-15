"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.scss";

const Hero = () => {
    const countersRef = useRef([]);
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    const animateCounter = (el, target) => {
        let count = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                el.textContent = target;
                clearInterval(interval);
            } else {
                el.textContent = Math.floor(count);
            }
        }, 20);
    };

    const startCounterAnimations = () => {
        countersRef.current.forEach((counter) => {
            if (counter) {
                const target = parseInt(counter.getAttribute("data-target")) || 0;
                animateCounter(counter, target);
            }
        });
    };

    const handleConsultationClick = () => {
        const phone = "919074506060";
        const text = encodeURIComponent("Hi! I'd like to know more.");
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
        });

        // Start counter animations after a delay
        const timer = setTimeout(() => {
            startCounterAnimations();
        }, 1500);

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }

                const script = document.createElement("script");
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject();
                document.body.appendChild(script);
            });
        };

        const initVanta = async () => {
            try {
                if (!window.THREE) {
                    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
                }
                if (!window.VANTA) {
                    await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js");
                }

                setTimeout(() => {
                    if (vantaRef.current && window.VANTA && window.VANTA.WAVES) {
                        vantaEffect.current = window.VANTA.WAVES({
                            el: vantaRef.current,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 400.0,
                            minWidth: 200.0,
                            scale: 1.0,
                            scaleMobile: 1.0,
                            // color: 0x0e83f8,
                            color: 0x3288,
                            shininess: 40,
                            waveHeight: 35,
                            waveSpeed: 0.6,
                            zoom: 1.75,
                        });
                    }
                }, 100);
            } catch (error) {
                console.error("Error loading Vanta:", error);
            }
        };

        initVanta();

        return () => {
            clearTimeout(timer);
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, []);

    return (
        <div className="hero" id="hero" ref={vantaRef}>
            <div className="hero-container container">
                <div className="hero-content">
                    <div className="content-items">
                        <h1>
                            Your <span className="highlight">German Study</span> Journey Starts Here
                        </h1>

                        <p data-aos="fade-up" data-aos-delay="500">
                            Navigate the path to top German universities with confidence. Complete end-to-end support from
                            expert counselors who make your dreams achievable.
                        </p>
                        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="700">
                            <button className="btn btn-1" onClick={handleConsultationClick}>
                                Consultation
                            </button>
                            <Link href="#contact" className="text-decoration-none">
                                <button className="btn btn-2">Check Eligibility</button>
                            </Link>
                        </div>

                        <div className="stats-container" data-aos="fade-up" data-aos-delay="900">
                            <div className="stat">
                                <div className="items">
                                    <span className="counter" data-target="200" ref={(el) => (countersRef.current[0] = el)}>
                                        0
                                    </span>
                                    <span>+</span>
                                </div>
                                <p>Students Helped</p>
                            </div>
                            <div className="stat">
                                <div className="items">
                                    <span className="counter" data-target="100" ref={(el) => (countersRef.current[1] = el)}>
                                        0
                                    </span>
                                    <span>%</span>
                                </div>
                                <p>Success Rate</p>
                            </div>
                            <div className="stat">
                                <div className="items">
                                    <span className="counter" data-target="3" ref={(el) => (countersRef.current[2] = el)}>
                                        0
                                    </span>
                                    <span>+</span>
                                </div>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
