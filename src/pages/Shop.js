import React, { useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../context/cart";
import { ItemContext } from '../context/items';
import SearchBar from "../components/SearchBar";
import SearchFound from "../components/SearchFound";
import { AiFillPlusCircle } from "react-icons/ai";

const categories = ['Grocery', 'Snack', 'Beverage', 'Sweet', 'Ready to Eat', 'Personal Care', 'Student Essential'];
const f = 'Personal Care'

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
        <section className="books">
          {categories.map((category) => {
            return (
              <section className={category}>
                <h4>{category}</h4>
                { items.filter(function(item) {
                  return item.category == {category}.category;
                }).map((item) => {
                  return (
                    <article className="book">
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                        addToCart({ ...item});
                        history.push("/cart");
                      }}
                      >
                      <AiFillPlusCircle />
                      </button>
                    </article>
                  )
                })}
              </section>
            )
          })}
        </section>
      </div>
    );
  }
  
export default Shop;