import { useRef } from "react";
import "./.Contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlk9xh9",
        "template_q2miz2a",
        form.current,
        "LFNnLVhaZZ1FdnaNc"
      )
      .then((result) => {
        console.log("email is sent");
      })
      .catch((error) => {
        console.log("error");
      });

    e.target.reset();
  };

  return (
    <section className="container__contact" id="contact">
      <div className="contact__heading">
        <h2>CONTACT</h2>
      </div>
      <div className="contact__section">
        <div className="contact__column">
          <h2 className="contact__title">Any questions?</h2>
          <p className="contact__instruction">
            Contact us via Instagram or leave an email!
          </p>
          <div className="contact__details">
            <a
              href="https://www.instagram.com/plant_gigs/"
              className="details__item"
            >
              <img
                src="src/assets-photos/insta_logo.jpg"
                alt="instagram"
                className="contact__photos"
              />
              plant_gigs
            </a>
            <a href="mailto:deer7221@gmail.com" className="details__item">
              <img
                src="src/assets-photos/email__photo.webp"
                alt="mail"
                className="contact__photos"
              />
              deer7221@gmail.com
            </a>
          </div>
        </div>

        <div className="contact__column">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="form__field">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form__input name"
                name="user__name"
                id="name"
                required
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                placeholder="E-mail"
                className="form__input email"
                name="user__email"
                id="email"
                required
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="form__input subject"
                name="user__subject"
                id="subject"
                required
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="message">
                Message
              </label>
              <textarea
                className="textarea"
                name="message"
                cols="30"
                rows="10"
                id="message"
                required
              />
            </div>

            <button type="submit" className="btn btn--primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
