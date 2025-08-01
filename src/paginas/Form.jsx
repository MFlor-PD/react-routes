import { Link } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // Opcional: solo para mostrar mensaje tras submit (Netlify redirige o no según config)
  // Pero como submit será normal, podemos usar "action" para ir a página de gracias o lo dejamos así.

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
    <div className="resume" style={{ maxWidth: "500px", margin: "auto" }}>
      <h1>For Any Inquiries or Collaborations</h1>
      <p>
        Whether you're looking for a freelance developer, a long-term teammate,
        or just want to connect — feel free to reach out!
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
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

        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
          data-netlify-recaptcha="true"
        >
          {/* El div con data-netlify-recaptcha es para que Netlify muestre el CAPTCHA */}
        </div>

        <p>
          <button type="submit" className="sendButton">
            Send
          </button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
