import React, { useState } from "react";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus(null); // Reset status before new submission

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "f030ed2a-e78d-4ab6-a8a3-6206d8127214");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        setSubmissionStatus("success");
        if (event.currentTarget) {
          event.currentTarget.reset(); // Reset form after success
        }
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      {/* Success/Error Message */}
      {submissionStatus === "success" && (
        <p className="success-message">✅ Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="error-message">
          ❌ Something went wrong. Please try again.
        </p>
      )}

      <form className="contact-form-container" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact-label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact-input text-md"
          >
            <option>General Inquiry</option>
            <option>Collaborations/Partnerships</option>
            <option>Job Opportunities</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            name="message"
            className="contact-input text-md"
            id="message"
            rows={8}
            placeholder="Type your message..."
          ></textarea>
        </label>
        <label htmlFor="checkbox" className="checkbox-label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact-form-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
