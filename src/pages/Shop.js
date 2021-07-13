import React, { useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../context/cart";
import { ItemContext } from '../context/items';
import SearchBar from "../components/SearchBar";
import SearchFound from "../components/SearchFound"



const Shop = () => {
    const history = useHistory();
    const { addToCart } = useContext(CartContext) || {};
    const { items, search, searchFound, clear } = useContext(ItemContext);

    return (
      <div>
        <header>
          <h3> Shop page</h3>
        </header>
        <SearchBar search={search} clear={clear}/>
        <SearchFound searchFound = {searchFound} />
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