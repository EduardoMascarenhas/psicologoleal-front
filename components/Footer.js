import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import FooterLogo from "../assets/images/loader.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <input
                type="text"
                placeholder="Insira o seu endereço de email"
                name="email"
              />
              <button className="thm-btn mailchimp-one__btn" type="submit">
                <span>Fique por dentro!</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="/">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p style={{textAlign: 'justify', paddingRight: '30px'}}>
                  Aqui, você encontrará um acolhimento psicológico respeitoso e empático, projetado para ajudá-lo(a) a navegar pelas complexidades da vida e desenvolver uma conexão profunda consigo mesmo(a).
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Contato</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="/">Vamos Conversar</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Últimos Posts</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">Post 1</a>
                      </li>
                      <li>
                        <a href="#">Post 2</a>
                      </li>
                      <li>
                        <a href="#">Post 3</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="/">Início</a>
                      </li>
                      <li>
                      <ScrollLink
                        activeClass="current"
                        to="features"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Terapia Online
                      </ScrollLink>
                      </li>
                      <li>
                      <ScrollLink
                        activeClass="current"
                        to="cta-one"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Sobre Mim
                      </ScrollLink>
                      </li>
                      <li>
                      <ScrollLink
                        activeClass="current"
                        to="cta-two"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Certificados
                      </ScrollLink>
                      </li>
                      <li>
                      <ScrollLink
                        activeClass="current"
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Depoimentos
                      </ScrollLink>
                      </li>
                      <li>
                      <ScrollLink
                        activeClass="current"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Blog
                      </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="https://www.facebook.com" target="_blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://br.pinterest.com" target="_blank">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright 2020 by Layerdrops.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
