import React, { useState, useEffect, useContext} from 'react'
import {API, graphqlOperation} from 'aws-amplify';
import { v4 as uuidv4 } from "uuid";
import { listItems } from '../graphql/queries';
import { processOrder } from "../graphql/mutations";
import { searchItems } from '../graphql/queries';

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

    const [searchFound, setSearchFound] = useState({value: true});

    const search = async (searchLabel) => {
      var itemData;

      if (searchLabel.label != "") {
        itemData = await API.graphql(graphqlOperation(searchItems, {
          filter: {title: { matchPhrase: searchLabel.label}}}));

        const itemList = itemData.data.searchItems.items;
        if (itemList.length > 0) {
          setSearchFound(true);
          setItems(itemList);
        } else {
          setSearchFound(false);
          fetchItems();
        }
      } 
    }

    const clear = async () => {
      setSearchFound(true);
      fetchItems();
    }

    return (
        <ItemContext.Provider value={{ items, checkout, search, searchFound, clear }}>
          {children}
        </ItemContext.Provider>
      );
    };

export { ItemContext, ItemProvider };
