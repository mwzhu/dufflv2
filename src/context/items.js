import React, { useState, useEffect, useContext} from 'react'
import {API, graphqlOperation} from 'aws-amplify';
import { v4 as uuidv4 } from "uuid";
import { listItems } from '../graphql/queries';
import { processOrder } from "../graphql/mutations";

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
      }, []);

    const checkout = async (orderDetails) => {
      const payload = {
        id: uuidv4(),
        ...orderDetails
      };
      try {
        await API.graphql(graphqlOperation(processOrder, { input: payload }));
        console.log("Order is successful");
      } catch (err) {
        console.log(err);
      }
    };

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
        <ItemContext.Provider value={{ items, checkout }}>
          {children}
        </ItemContext.Provider>
      );
    };

export { ItemContext, ItemProvider };
