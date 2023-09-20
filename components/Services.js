import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Terapia Online"
          titleText={`Suporte psicológico no conforto do seu ambiente, \n sem a necessidade de deslocamento.`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Acessibilidade</h3>
                <p>A terapia online elimina barreiras geográficas, permitindo que você acesse cuidados de saúde mental, independentemente de onde esteja localizado.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>Conforto e Privacidade</h3>
                <p>Você pode se sentir mais à vontade durante as sessões no ambiente familiar de sua casa, promovendo uma comunicação aberta e honesta.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Flexibilidade de Horários</h3>
                <p>As sessões podem ser agendadas para se adequar à sua agenda, eliminando a necessidade de deslocamentos e tempos de espera.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>Economia de Tempo e Dinheiro</h3>
                <p>Evite despesas de viagem e economize tempo valioso ao optar pela terapia online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
