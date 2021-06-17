import React, { useState, useEffect } from 'react'
import {API, graphqlOperation, sectionFooter} from 'aws-amplify';
import { listItems } from '../graphql/queries';
import { AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react';

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
      fetchItems();
    }, []);
  
    const fetchItems = async () => {
      try {
        const itemData = await API.graphql(graphqlOperation(listItems));
        const itemList = itemData.data.listItems.items;
        console.log('item list', itemList);
        setItems(itemList);
      } catch (err) {
        console.log('error on fetching items', err);
      }
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h3> Shop page</h3>
        </header>
        <div className = "itemList">
          { items.map(item => {
            return (
              <section>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </section>
            )
          })}
        </div>
      </div>
    );
  }
  

export default Shop;