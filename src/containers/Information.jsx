import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';

const Information = () => (
  <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto:</h2>
      </div>
      <div className="Information-form">
        <form action="">
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo electronico" name="email" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Codigo Postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">Regresar</div>
        <Link to="/checkout/payment">
          <div className="Information-next">Pagar</div>
        </Link>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Pedido:</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h4>Item Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
