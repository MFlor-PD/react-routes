import { Link } from "react-router-dom";
import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return submitted ? (
    
      <>
      <Link to="/" className="right-link">Back to Home</Link>
      <div className="thanks">
        <h2>Thank you! Your message has been sent. ✅</h2>
      </div>
    </>
  ) : (
    <>
      <div className="sticky-links">
        <Link to="/" className="right-link">Go to Home</Link>
      </div>

      <div className="resume">
        <h1>For Any Inquiries or Collaborations</h1>
        <p>Whether you're looking for a freelance developer, a long-term teammate, or just want to connect — feel free to reach out!</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ maxWidth: '500px', margin: 'auto' }}
        >
        

          <p>
            <label className="label">
              Name:<br />
              <input
                type="text"
                name="name"
                required
                pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"
                title="Solo letras y espacios"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, '');
                }}
              />
            </label>
          </p>

          <p>
            <label className="label">
              Email:<br />
              <input type="email" name="email" required />
            </label>
          </p>

          <p>
            <label className="label">
              Message:<br />
              <textarea name="message" rows="5" required />
            </label>
          </p>

          <p>
            <button type="submit" className="sendButton">Send</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
