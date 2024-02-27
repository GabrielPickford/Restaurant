import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Boletín" />
      <h1 className="headtext__cormorant">Suscríbete a nuestro Boletín</h1>
      <p className="p__opensans">Y no te pierdas nuestros nuevos sabores</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Introduce tu dirección de correo electrónico" />
      <button type="button" className="custom__button">Suscribirse</button>
    </div>
  </div>
);

export default Newsletter;