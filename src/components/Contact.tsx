import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:shaurya.email@example.com" data-cursor="disable">
                shaurya.email@example.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor’s in [Your Degree]</p> {/* TODO: set your degree */}
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/yourusername"   // TODO
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin/"  // TODO
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.kaggle.com/your-kaggle"  // optional
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Kaggle <MdArrowOutward />
            </a>
            <a
              href="https://your-portfolio-link"  // optional
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shaurya Pandey</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;