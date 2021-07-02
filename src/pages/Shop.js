import React, { useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../context/cart";
import { ItemContext } from '../context/items';



const Shop = () => {
    const history = useHistory();
    const { addToCart } = useContext(CartContext) || {};
    const { items } = useContext(ItemContext);

    return (
      <div>
        <header>
          <h3> Shop page</h3>
        </header>
        <div>
          { items.map((item) => {
            return (
              <section>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <img src={item.image} alt={item.title} />
                <button
                  className="btn"
                  onClick={() => {
                    addToCart({ ...item});
                    history.push("/cart");
                  }}
                >
                  Add to Cart
                </button>
              </section>
            )
          })}
        </div>
      </div>
    );
  }
  
export default Shop;