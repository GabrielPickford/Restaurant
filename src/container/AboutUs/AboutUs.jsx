import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Heladería Golosa nace de la necesidad de disfrutar de un delicioso postre en este caso helado sin luego sentir el malestar que produce la lactosa en cierto grupo de personas. Creando así una heladería innovadora, que busca ofrecer la mejor calidad en productos y servicios brindando una experiencia única en nuestros clientes, buscando ser inclusivos en el mercado heladero siendo una de las primeras heladerías en el rubro totalmente capacitada</p>
        <button type="button" className="custom__button">Saber Más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Es así que helaría Golosa producirá y comercializará helados italianos sin lactosa y los complementará con la Venta de bebidas embotelladas, horneados, chocolate caliente, café en diferentes presentaciones, tartas de helado y dulces navideños, que nos permitirá deleitar con nuestros sabores a nuestros clientes.</p>
        <button type="button" className="custom__button">Saber Más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;