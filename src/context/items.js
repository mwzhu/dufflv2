import React, { useState, useEffect, useContext} from 'react'
import {API, graphqlOperation} from 'aws-amplify';
import { listItems } from '../graphql/queries';

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
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
        <ItemContext.Provider value={{ items }}>
          {children}
        </ItemContext.Provider>
      );
    };

export { ItemContext, ItemProvider };
