import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Franco</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
             Skills
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          

          <a
            href="https://github.com/franco-balsamo"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/francobalsamo--developer-backend/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Franco Balsamo. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
