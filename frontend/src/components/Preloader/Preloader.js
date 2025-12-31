"use client";

import { useState, useEffect } from "react";
import "./Preloader.scss";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 300);
                    return 100;
                }
                return prev + 15;
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    if (!loading) return null;

    return (
        <div className="progress-preloader">
            <div className="progress-content">
                <img src="/Images/logo.png" alt="Logo" className="progress-logo" />
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="progress-text">{progress}%</p>
            </div>
        </div>
    );
};

export default Preloader;
