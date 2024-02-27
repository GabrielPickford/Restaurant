import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="No te quedes con las ganas" />
      <h1 className="app__header-h1">No hay excusa para el gustito</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Excelencia en cada bocado: Helados y alimentos funcionales que superan tus expectativas, calidad inigualable a un precio accesible.</p>
      <button type="button" className="custom__button">Explorar Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;