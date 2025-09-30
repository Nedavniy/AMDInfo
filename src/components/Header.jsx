import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">nedavnii</div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
