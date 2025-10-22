import React from "react";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer-position">
      <div className="footer-area">
        <span>
          <FaCopyright />
        </span>
        <span>Copyrights reserved by:</span>
        <span>
          <h2 className="footer-heading">Dietitian Amna Khan Dr of wellness</h2>
        </span>
      </div>
    </section>
  );
}
