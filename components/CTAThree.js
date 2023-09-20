import React from "react";
import { Container } from "react-bootstrap";

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  return (
    <section className="cta-three">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="" />
      <Container className="text-center">
        <h3>
          Agendamento & <br /> Contato
        </h3>
        <p>Deixe o seu email abaixo para que possamos entrar em contato com você e para que você fique por dentro das minhas últimas notícias, ou clique no botão abaixo e converse diretamente comigo no WhatsApp! </p>
        <div className="cta-three__btn-wrap">
          <a href="#" className="cta-three__btn">
            <i className="fab fa-whatsapp"></i>
            <span>E ai...</span>
            <b>Vamos Conversar?</b>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTAThree;
