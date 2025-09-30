import React from "react";
import "./Card.css";

export default function Card({ title, description, image, link }) {
  return (
    <article className="card" tabIndex={0} aria-label={title}>
      <div className="card__media">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__foot">
          <a className="btn" href={link} target="_blank" rel="noreferrer">Open</a>
        </div>
      </div>
    </article>
  );
}
