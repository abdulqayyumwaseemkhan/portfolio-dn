import React from "react";
import "./AmnaPortfolio.css";

const AmnaPortfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Introduction Section */}
      <section className="section">
        <h2 className="section-title">Introduction about me</h2>
        <div className="section-box">
          <p>
            Amna Khan is a qualified and dedicated Dietitian and Nutritionist
            committed to promoting optimal health and well-being through
            evidence-based nutrition practices. Her mission is to help
            individuals achieve balanced health through personalized nutrition
            plans, mindful eating, and sustainable lifestyle modifications. She
            specializes in clinical nutrition, with expertise in weight
            management, diabetes, hypertension, nephrology, pediatric nutrition,
            and gastroenterology.
          </p>
          <p>
            Amna has gained extensive professional experience through her work
            at reputed institutions such as Fatima Memorial Hospital, Waris Shah
            Hospital, Jinnah Hospital, and General Hospital. Her background
            includes multiple internships, hospital postings, and over a year of
            practical experience at Ch. Rahmat Hospital, as well as working with
            online clients. With a strong academic foundation in Human Nutrition
            and Dietetics, she strives to guide individuals toward better health
            through realistic, evidence-based, and sustainable dietary choices.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="section-box text-center">
          <h3 className="sub-title">Degree</h3>
          <p className="degree-text">
            BS Human Nutrition & Dietitian from GC University Faisalabad
          </p>

          <h3 className="sub-title">Certifications in Clinical Nutrition</h3>
          <ul className="list">
            <li>Fatima Memorial Hospital, Lahore</li>
            <li>Waris Shah Hospital, Lahore</li>
            <li>Jinah Hospital, Lahore</li>
            <li>General Hospital, Lahore</li>
          </ul>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="section">
        <h2 className="section-title">Professional Experiences</h2>
        <div className="section-box text-center">
          <p>Internships in Major Lahore well known Hospitals</p>
          <p>1 year 2 months job experience at Ch. Rehmat Hospital, Lahore</p>
          <p>Hospital postings</p>
          <p>Online Clients</p>
        </div>
      </section>

      {/* Specialization Skills Section */}
      <section className="section">
        <h2 className="section-title">Specialization skills</h2>
        <div className="section-box text-center">
          <h3 className="sub-title">Clinical Skills</h3>
          <ul className="list">
            <li>Weight Management</li>
            <li>PCOS</li>
            <li>Diabetes</li>
            <li>Children Health</li>
            <li>Gastroenterologist</li>
            <li>Hypertension</li>
            <li>Nephrology</li>
          </ul>

          <h3 className="sub-title">Information Technology Skills</h3>
          <ul className="list">
            <li>Basic IT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript Basics</li>
            <li>React Js</li>
            <li>GitHub Basics</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AmnaPortfolio;
