import React, { useState, useEffect } from 'react'
import {API, graphqlOperation, Storage, sectionFooter} from 'aws-amplify';
import { listItems } from '../graphql/queries';
import { AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react';

const Shop = () => {
    const [items, setItems] = useState([]);
    // const [itemURL, setItemURL] = useState('');

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

  //   const fetchImages = async idx => {
  //     const itemFilePath = items[idx].image;
  //     try {
  //       const itemAccessURL = await Storage.get(itemFilePath);
  //       console.log('access url', itemAccessURL);
  //       setItemURL(itemAccessURL);
  //       return;
  //     } catch (err) {
  //       console.log('error on accessing file from s3', err);
  //   }
  // }

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
              </section>
            )
          })}
        </div>
      </div>
    );
  }
  
export default Shop;