import React from "react";
import "./PortfolioAmd.css";
import Card from "./Card";
import gpuFeatures from "../data/gpuFeatures";

export default function PortfolioAmd() {
  return (
    <section id="features" className="portfolio section">
      <div className="container">
        <h2 className="works__heading">Key <span style={{color:'var(--accent)'}}>Features</span></h2>
        <div className="portfolio__list">
          {gpuFeatures.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
