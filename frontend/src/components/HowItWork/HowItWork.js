'use client';

import React, { useEffect, useState } from "react";
import {
  FaUserCheck,
  FaGraduationCap,
  FaFileAlt,
  FaPassport,
  FaPlane,
  FaHome,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HowItWork.scss";

const HowItWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
    });
    AOS.refresh();
    return () => AOS.refresh();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Free Initial Consultation",
      description:
        "Tailored session to align your goals and assess admission fit",
      detailedDescription:
        "Our expert counselors conduct a comprehensive assessment of your academic background, career aspirations, and personal preferences. We understand your journey because we've been students in Germany ourselves.",
      icon: <FaUserCheck />,
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      deliverables: ["Academic Profile Assessment", "Goal Mapping Session", "Personalized Study Plan"],
    },
    {
      id: 2,
      title: "Course Selection & Admission Analysis",
      description:
        "Expert guidance to find the perfect academic match with realistic admission probability",
      detailedDescription:
        "We help you choose programs that align with your profile, career goals, and budget. Our team assesses your chances of admission, giving you a clear picture of your opportunities at top German universities.",
      icon: <FaGraduationCap />,
      color: "#10b981",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      deliverables: ["University Shortlist", "Admission Probability Report", "Course Comparison Analysis"],
    },
    {
      id: 3,
      title: "Application Preparation & Submission",
      description:
        "Complete assistance with document preparation and application submission",
      detailedDescription:
        "Your dedicated staff member helps prepare all required documents, reviews applications thoroughly, and ensures error-free submissions to maximize your chances of acceptance.",
      icon: <FaFileAlt />,
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      deliverables: ["Document Preparation", "Application Review", "Submission Management"],
    },
    {
      id: 4,
      title: "Visa Process & Documentation",
      description:
        "Stress-free visa assistance with dedicated personal support throughout",
      detailedDescription:
        "Your assigned staff member guides you through the entire visa process - from preparing financial proof to submitting applications. We ensure the documentation process is smooth and stress-free.",
      icon: <FaPassport />,
      color: "#ef4444",
      bgGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      deliverables: ["Visa Documentation Kit", "Financial Proof Guidance", "Embassy Application Support"],
    },
    {
      id: 5,
      title: "Pre-Departure Preparation",
      description:
        "Comprehensive preparation for your journey and cultural orientation",
      detailedDescription:
        "We prepare you for life in Germany with practical guidance on what to expect, cultural orientation, and essential preparations for your smooth transition to German student life.",
      icon: <FaPlane />,
      color: "#a855f7",
      bgGradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
      deliverables: ["Cultural Orientation Guide", "Pre-departure Checklist", "Germany Survival Tips"],
    },
    {
      id: 6,
      title: "Settlement & Ongoing Support",
      description:
        "Complete support for settling in Germany with accommodation and job assistance",
      detailedDescription:
        "We help with city registration, bank account setup, social security, and tax ID requirements. Plus, our bonus services include accommodation assistance and guidance on working opportunities in Germany.",
      icon: <FaHome />,
      color: "#06b6d4",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      deliverables: ["City Registration Support", "Bank Account Setup", "Accommodation & Job Guidance"],
    },
  ];

  const current = steps[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="how-it-works-horizontal" id="how-it-works">
      <div className="background-pattern"></div>

      <div className="container how-container">
        {/* Header */}
        <div className="row title-row">
          <div className="col-12 text-center title-col">
            <h2 className="section-title" data-aos="fade-up">
              How Edufam Works
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Your seamless journey to studying in Germany - guided by those who've walked this path
            </p>
          </div>
        </div>

        {/* Desktop layout (Bootstrap grid) */}
        <div className="row d-none d-lg-flex">
          {/* Left: Step Grid */}
          <div className="col-lg-7">
            <div className="step-grid row g-3" data-aos="fade-right">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div key={step.id} className="col-12 col-md-6">
                    <button
                      type="button"
                      className={`step-grid-card ${isActive ? "active" : ""}`}
                      onClick={() => setActiveStep(index)}
                    >
                      <span className="grid-badge">{step.id}</span>
                      <span className="grid-icon" style={{ background: step.bgGradient }}>
                        {step.icon}
                      </span>
                      <span className="grid-title">{step.title}</span>
                      <span className="grid-desc">{step.description}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Spotlight panel */}
          <div className="col-lg-5">
            <div className="spotlight" data-aos="fade-left">
              <div className="spotlight-header">
                <div className="spotlight-icon" style={{ background: current.bgGradient }}>
                  {current.icon}
                </div>
                <div>
                  <div className="spotlight-step">Step {current.id}</div>
                  <h3 className="spotlight-title">{current.title}</h3>
                </div>
              </div>

              <p className="spotlight-desc">{current.detailedDescription}</p>

              <div className="spotlight-deliverables">
                <h4>What You Get:</h4>
                <ul>
                  {current.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle style={{ color: current.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="spotlight-actions">
                <button className="spotlight-btn primary" onClick={handleNext}>
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="row d-block d-lg-none">
          <div className="col-12">
            <div className="mobile-steps">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`mobile-step ${activeStep === index ? "active" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="mobile-step-header">
                    <div className="mobile-icon" style={{ background: step.bgGradient }}>
                      {step.icon}
                    </div>
                    <h3 className="mobile-title">{step.title}</h3>
                  </div>

                  {activeStep === index && (
                    <div className="mobile-step-body">
                      <p className="mobile-description">{step.description}</p>
                      <p className="mobile-detailed">{step.detailedDescription}</p>

                      <div className="mobile-deliverables">
                        <h4>What You Get:</h4>
                        <ul>
                          {step.deliverables.map((item, idx) => (
                            <li key={idx}>
                              <FaCheckCircle style={{ color: step.color }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;