import {Link} from "react-router-dom"
function ContactForm() {
  return (
    <>
    <div className="sticky-links">
    <Link to="/" className="right-link">Go to Home</Link>
    </div>
    
    <div className="resume">
    <h1>Contact Me</h1>
    
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      style={{ maxWidth: '500px', margin: 'auto' }}
    >
      {/* Campo oculto para bots */}
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <p>
        <label className="label">
          Name:<br />
          <input
            type="text"
            name="name"
            required
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"
            title="Solo letras y espacios"
            onInput={(e) => {e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, '');
  }}/>
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