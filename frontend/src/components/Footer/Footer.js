import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4">
                                <div className="footer-section brand-section">
                                    <h3 className="brand-name">EduFam</h3>
                                    <p className="brand-description">
                                        Your trusted partner for German education. Making dreams come true with expert
                                        guidance and support.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" aria-label="Facebook">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" aria-label="Twitter">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" aria-label="LinkedIn">
                                            <FaLinkedinIn />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/edu.fam?igsh=MXhjczk0anNqdWJuZA=="
                                            aria-label="Instagram"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-6 mb-4">
                                <div className="footer-section">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link href="#about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="#courses">Courses</Link>
                                        </li>
                                        <li>
                                            <Link href="#how-it-works">How It Works</Link>
                                        </li>
                                        <li>
                                            <Link href="#contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-6 mb-4">
                                <div className="footer-section">
                                    <h4>Contact Info</h4>
                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <FaPhone />
                                            <span>+91 9074506060</span>
                                        </div>
                                        <div className="contact-item">
                                            <FaEnvelope />
                                            <span>enquiryedufam@gmail.com</span>
                                        </div>
                                        <div className="contact-item">
                                            <FaMapMarkerAlt />
                                            <span>Kochi, Kerala, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <p>
                                &copy; {currentYear} <a href="https://cozech.com/">COZECH</a>. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
