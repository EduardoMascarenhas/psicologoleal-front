import React from "react";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.png";

const Banner = () => {

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
       
        <div onClick={() => console.log('Falar comigo')} className="banner-one__video video-popup">
          <i className="fab fa-whatsapp"></i>
        </div>
        
        <div className="row">
          <div className="col-lg-7" style={{marginTop: '-50px'}}>
            <div className="banner-one__content">
              <div className="mc-form__response"></div>
              <h3>
                Seu psicólogo <br /> a qualquer hora, <br /> em qualquer <br /> lugar.
              </h3>
              <p>
                Bem-vindo(a) ao espaço dedicado ao seu bem-estar <br /> emocional e ao caminho do autoconhecimento.
              </p>
              <a href="#" className="thm-btn banner-one__btn">
                <span>Vamos Conversar?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
