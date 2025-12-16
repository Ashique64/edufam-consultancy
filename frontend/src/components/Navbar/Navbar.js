"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "boxicons/css/boxicons.min.css";
import "./Navbar.scss";

const Navbar = () => {
    const [menuIcon, setMenuicon] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const router = useRouter();

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };

    const handleNavItemClick = () => {
        setMenuicon(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbars ${isSticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="row nav_row">
                    <div className="col-xl-3 col-lg-2 col-6 nav_col1">
                        <div className="logo">
                            <Link href="/">
                                <img src={isSticky ? "/Images/logo.png" : "/Images/logo-4.png"} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 nav_col2">
                        <div id="mobile_menu">
                            <ul className={menuIcon ? "show" : ""}>
                                <li>
                                    <Link href="#hero" onClick={handleNavItemClick}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={handleNavItemClick}>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#courses" onClick={handleNavItemClick}>
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#how-it-works" onClick={handleNavItemClick}>
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" onClick={handleNavItemClick}>
                                        Contact
                                    </Link>
                                </li>
                                <i className={menuIcon ? "bx bx-x" : ""} onClick={handleMenuIcon}></i>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-6  nav_col3">
                        <div className="items">
                            <div className="mobile_icon" onClick={handleMenuIcon}>
                                <i
                                    className={menuIcon ? "" : "bx bx-menu"}
                                    style={{ color: isSticky ? "var(--primary-dark)" : "var(--secondary-color)" }}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
