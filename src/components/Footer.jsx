import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Nedavnii — AMD demo</div>
        <div className="footer-links">
          <a href="https://github.com/Nedavniy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.amd.com" target="_blank" rel="noreferrer">AMD</a>
        </div>
      </div>
    </footer>
  );
}
