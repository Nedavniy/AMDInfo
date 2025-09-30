import React from "react";
import "./HeroAmd.css";

export default function HeroAmd() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="h1">AMD <span style={{color:"var(--accent)"}}>Radeon</span> 7900 XTX</h1>
          <p className="lead">
            Unleash next-gen gaming and creative performance — 24GB GDDR6, RDNA 3 and advanced ray tracing.
          </p>
          <div style={{marginTop: 20}}>
            <a className="btn" href="#features">Explore features</a>
            <a className="btn" style={{marginLeft:12, background:'transparent', border:'1px solid rgba(255,255,255,0.06)'}} href="https://www.amd.com/en/graphics/desktop/7000-series" target="_blank" rel="noreferrer">Official site</a>
          </div>
        </div>
        <div className="hero-right" aria-hidden="true">
          <div className="gpu-card">
            <img src="https://images.unsplash.com/photo-1587202372775-5f6b4ddc40a7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f6b4f1e2cd3b8572c6f6f1a8c4d9bb8" alt="GPU" />
          </div>
        </div>
      </div>
    </section>
  );
}
