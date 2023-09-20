import React from "react";
import BlockTitle from "./BlockTitle";

import CTAImage1 from "../assets/images/resources/cta-2-moc-1.png";
import CTAImage2 from "../assets/images/resources/cta-2-moc-2.png";
import CTAImage3 from "../assets/images/resources/cta-2-moc-3.png";

const CTATwo = () => {
  return (
    <section className="cta-two" id="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Certificados e Premiações"
                titleText={`Excelência e Comprometimento`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-app-development"></i>
                  </div>
                  <h3>
                    Certificado <br /> UM
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-computer-graphic1"></i>
                  </div>
                  <h3>
                    Certificado <br /> DOIS
                  </h3>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                Estes certificados e premiações mostram o meu compromisso em ajudar a melhorar a vida das pessoas. Cada um deles representa uma etapa importante na minha jornada profissional, e estou ansioso para compartilhá-los com você.
                </p>
              </div>
              <a href="#" className="thm-btn cta-two__btn">
                <span>Vamos Conversar?</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={CTAImage1}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage2}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={CTAImage3}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
