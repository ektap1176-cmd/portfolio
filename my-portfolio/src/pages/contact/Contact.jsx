import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";

const CONTACT_STORAGE_KEY = "portfolio_contact_messages";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSaved(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...formData,
      savedAt: new Date().toISOString(),
    };

    const existingMessages = JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY) || "[]");
    const updatedMessages = [...existingMessages, payload];
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(updatedMessages));
    console.log("Contact form saved:", payload);

    setSaved(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section retro-surface">
      <span className="contact-shape contact-shape-circle" aria-hidden="true" />
      <span className="contact-shape contact-shape-square" aria-hidden="true" />

      <div className="contact-header">
        <span className="contact-kicker">//</span>
        <h2 className="contact-title">GET IN TOUCH</h2>
        <span className="contact-dot" aria-hidden="true" />
      </div>

      <div className="contact-grid">
        <aside className="contact-info panel">
          <h3>LET&apos;S TALK ABOUT EVERYTHING</h3>
          <p>Don&apos;t like forms? Send me an email directly.</p>
          <a href="mailto:ektap1176@gmail.com" className="contact-mail-link">
            <FiMail aria-hidden="true" />
            <span>ektap1176@gmail.com</span>
          </a>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Insert your name"
              aria-label="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Insert your email"
              aria-label="Email"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Insert your subject"
            aria-label="Subject"
          />
          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            aria-label="Message"
          />

          <button type="submit" className="contact-submit panel">
            <FiSend aria-hidden="true" />
            <span>SEND MESSAGE</span>
          </button>
          {saved ? <p className="contact-saved-note">Message sent successfully.</p> : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;
