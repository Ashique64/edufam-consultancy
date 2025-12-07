"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { baseUrl } from "@/utils/baseUrl";
import "./Contact.scss";

const Contact = () => {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [responseMessage, setResponseMessage] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setMounted(true);

        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 100,
            disable: false,
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
        });

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            AOS.refresh();
        };
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");
        setIsError(false);

        try {
            const response = await axios.post(`${baseUrl}/api/contact/`, {
                fullName: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            });

            if (response.status === 200) {
                setResponseMessage(response.data.message || "Thank you for your message! We'll get back to you soon.");
                setIsError(false);
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setResponseMessage("There was an error sending your message. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setResponseMessage(error.response.data.error);
            } else {
                setResponseMessage("A network or server error occurred. Please try again.");
            }
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            id: 1,
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 9074506060",
            description: "Call us anytime",
            color: "#10b981",
            gradient: "linear-gradient(135deg, #10b981, #059669)",
        },
        {
            id: 2,
            icon: <FaEnvelope />,
            title: "Email",
            value: "enquiryedufam@gmail.com",
            description: "Send us a message",
            color: "#3b82f6",
            gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt />,
            title: "Address",
            value: "123 Education Street",
            description: "Kochi, Kerala, India",
            color: "#f59e0b",
            gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
        },
    ];

    const handleContactCardClick = (info) => {
        if (info.title === "Phone") {
            window.location.href = `tel:${info.value.replace(/\s+/g, "")}`;
        } else if (info.title === "Email") {
            window.location.href = `mailto:${info.value}`;
        } else if (info.title === "Address") {
            const mapQuery = encodeURIComponent(info.value);
            window.open(`https://www.google.com/maps/search/?api=1&query=${mapQuery}`, "_blank");
        }
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null;
    }

    return (
        <div className="contact" id="contact">
            <div className="container contact-container">
                <div className="row title-row">
                    <div className="col-12 title-col">
                        <div className="section-header">
                            <span className="badge">Let's Connect</span>
                            <h2 className="section-title">Get In Touch</h2>
                        </div>

                        {/* Decorative Divider */}
                        <div className="divider">
                            <span className="line"></span>
                            <span className="icon">⚭</span>
                            <span className="line"></span>
                        </div>

                        {/* Description */}
                        <p className="section-description">
                            Ready to start your journey to Germany? Let&apos;s make your educational dreams come true
                            together
                        </p>
                    </div>
                </div>

                <div className="row main-content">
                    {/* Contact Info Section */}
                    <div className="col-lg-5 col-12 mb-5">
                        <div
                            className="contact-info-section"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <h3 className="info-title">
                                <FaUser className="title-icon" />
                                Contact Information
                            </h3>
                            <p className="info-description">
                                Reach out to us through any of the following channels. We&apos;re here to help you every
                                step of the way.
                            </p>
                            <div className="contact-cards">
                                {contactInfo.map((info) => (
                                    <div
                                        key={info.id}
                                        className={`contact-card ${activeCard === info.id ? "active" : ""}`}
                                        onMouseEnter={() => setActiveCard(info.id)}
                                        onMouseLeave={() => setActiveCard(null)}
                                        onClick={() => handleContactCardClick(info)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="card-icon" style={{ background: info.gradient }}>
                                            {info.icon}
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">{info.title}</h4>
                                            <p className="card-value">{info.value}</p>
                                            <p className="card-description">{info.description}</p>
                                        </div>
                                        <div className="card-border" style={{ background: info.gradient }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="col-lg-7 col-12">
                        <div
                            className="contact-form-section"
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <h3 className="form-title">
                                <FaPaperPlane className="title-icon" />
                                Send Us a Message
                            </h3>
                            <p className="form-description">
                                Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                autoComplete="name"
                                                suppressHydrationWarning
                                                required
                                            />
                                            <div className="input-border"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                autoComplete="email"
                                                suppressHydrationWarning
                                                required
                                            />
                                            <div className="input-border"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter your phone number"
                                                autoComplete="tel"
                                                suppressHydrationWarning
                                                required
                                            />
                                            <div className="input-border"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your goals and how we can help you..."
                                        rows="5"
                                        suppressHydrationWarning
                                        required
                                    ></textarea>
                                    <div className="input-border"></div>
                                </div>

                                <button
                                    type="submit"
                                    className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                            {responseMessage && (
                                <div className={`form-response-message ${isError ? "form-error" : "form-success"}`}>
                                    {responseMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
