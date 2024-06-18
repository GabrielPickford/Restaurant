import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctanos</h1>
        <p className="p__opensans">Santa Cruz de la Sierra, Italia</p>
        <p className="p__opensans">943 9635 787</p>
        <p className="p__opensans">943 9635 787</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.golosa} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor manera de encontrarte a ti mismo es perderte al servicio de los demás.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt=''/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram  />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario de apertura</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sabado-Domingo:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Golosa. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;