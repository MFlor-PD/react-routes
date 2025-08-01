import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recaptchaValue) {
      alert("Please confirm you are not a robot.");
      return;
    }

    const form = event.target;
    const data = new FormData(form);

    // Añadimos el token del reCAPTCHA al body
    data.append("g-recaptcha-response", recaptchaValue);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true);
        recaptchaRef.current.reset(); // Limpia el captcha al enviar
        setRecaptchaValue(null);
      })
      .catch((error) => alert(error));
  };

  return submitted ? (
    <>
      <Link to="/" className="right-link">
        Back to Home
      </Link>
      <div className="thanks">
        <h2>Thank you! Your message has been sent. ✅</h2>
      </div>
    </>
  ) : (
    <>
      <div className="sticky-links">
        <Link to="/" className="right-link">
          Go to Home
        </Link>
      </div>

      <div className="resume">
        <h1>For Any Inquiries or Collaborations</h1>
        <p>
          Whether you're looking for a freelance developer, a long-term teammate,
          or just want to connect — feel free to reach out!
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true" //netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ maxWidth: "500px", margin: "auto" }}
        ><input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you're human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <p>
            <label className="label">
              Name:
              <br />
              <input
                type="text"
                name="name"
                required
                pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"
                title="Solo letras y espacios"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g,
                    ""
                  );
                }}
              />
            </label>
          </p>

          <p>
            <label className="label">
              Email:
              <br />
              <input type="email" name="email" required />
            </label>
          </p>

          <p>
            <label className="label">
              Message:
              <br />
              <textarea name="message" rows="5" required />
            </label>
          </p>

          {/* reCAPTCHA */}
          <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center"
           }}>
             <ReCAPTCHA
             sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
             onChange={(value) => setRecaptchaValue(value)}
             ref={recaptchaRef}/>
          </div>

          <p>
            <button type="submit" className="sendButton">
              Send
            </button>
          </p>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
