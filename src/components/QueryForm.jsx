import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./QueryForm.css";

export default function QueryForm() {
  return (
    <div className="qna-form">
      <form className="contact-form">
        <h3>Any Queries...</h3>
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <textarea placeholder="write your query here..."></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <h3>Social Platforms</h3>
        <div className="social-platforms">
          <a href="#" className="btn">
            <span>
              <RiInstagramFill />
            </span>
            <span>Instagram</span>
          </a>
          <a href="#" className="btn">
            <span>
              <FaLinkedin />
            </span>
            <span>LinkedIn</span>
          </a>
          <a href="#" className="btn">
            <span>
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
