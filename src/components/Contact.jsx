import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // В демо — просто уведомление. В реальном проекте отправка на сервер.
    alert(`Thanks ${name}! (demo)\nI would normally send this message to email: ${email}`);
    setName(""); setEmail(""); setMsg("");
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2>Contact <span style={{color:'var(--accent)'}}>me</span></h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
          <input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
          <textarea placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)} rows={6} required />
          <button className="btn" type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
