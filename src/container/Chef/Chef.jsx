import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabras de la Chef" />
      <h1 className="headtext__cormorant">En lo que creemos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">En mi cocina, siempre he abrazado la filosofía de que la excelencia se encuentra en la calidad, no en la cantidad.</p>
        </div>
        <p className="p__opensans">  Cada ingrediente, cada detalle, es una expresión de dedicación y pasión.  </p>
      </div>

      <div className="app__chef-sign">
        <p>Camila Bonino</p>
        <p className="p__opensans">Chef y Fundadora</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;