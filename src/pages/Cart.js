import React, { useContext } from 'react'

let container = document.querySelector('.Delivery');
let deliveryButton = document.createElement("button");
let text = document.createTextNode("Delivery");
deliveryButton.appendChild(text);
container.appendChild(deliveryButton)

const Cart = () => {
    return (
      <div className="Delivery">
      <div className="Button">
      <h1>Delivery</h1>
    </div>
    </div>
    );
}

export default Cart;