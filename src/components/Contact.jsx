import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5174/api/v1/message/send",
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Адрес:</h4>
          <p>ул. Горькая 27/1 <br />ТРЦ "VEFA", Бишкек</p>
        </div>
        <div className="item">
          <h4>Позвоните нам:</h4>
          <p>Контакты: <br />+996 (700) 808-080 <br />+996 (312) 123-456</p>
        </div>
        <div className="item">
          <h4>Напишите нам:</h4>
          <p>infocosclinic.kg@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46058.96874703113!2d74.57277191693254!3d42.84244922707892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb633eb4a865f%3A0xda48af2b2a2e4b59!2z0JLQtdGE0LAg0KbQtdC90YLRgA!5e0!3m2!1sru!2skg!4v1718629310591!5m2!1sru!2skg"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
