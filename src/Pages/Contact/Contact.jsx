import "./Contact.scss";
import {
  IoMailOutline,
  IoGitBranchOutline,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLocationOutline,
} from "react-icons/io5";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact-wrapper">
          <div className="contact-details">
            <div className="contact-details_head">
              Let's get in, <span>Touch.</span>
            </div>
            <ul className="contact-details_list">
              <li>
                <IoMailOutline className="contact-details_list_icon" />
                naseebnas98@gmail.com
              </li>
              <li>
                <IoGitBranchOutline className="contact-details_list_icon" />
                naseebahammed
              </li>
              <li>
                <IoLogoLinkedin className="contact-details_list_icon" />
                in/naseeb-ahammed/
              </li>
              <li>
                <IoLogoInstagram className="contact-details_list_icon" />
                returnd_martian
              </li>
              <li>
                <IoLocationOutline className="contact-details_list_icon" />
                Kerala, India
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <form action="">
              <p className="contact-form_head">Fill the below form</p>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  required
                />
                <label htmlFor="subject" className="form__label">
                  Subject
                </label>
              </div>

              <div className="form__group field">
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="message"
                  className="form__field"
                ></textarea>
                <label htmlFor="msg" className="form__label">
                  Message
                </label>
              </div>
              <button className="contact-form_button">Connect Me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
