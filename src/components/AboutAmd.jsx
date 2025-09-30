import React from "react";
import "./AboutAmd.css";

export default function AboutAmd() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>Why choose <span style={{color:'var(--accent)'}}>Radeon</span></h2>
        <p className="about-text">
          AMD Radeon GPUs combine raw performance with power efficiency and modern features. Whether you're
          gaming at 4K, rendering 3D content, or streaming, Radeon delivers the performance and reliability you expect.
        </p>
      </div>
    </section>
  );
}
