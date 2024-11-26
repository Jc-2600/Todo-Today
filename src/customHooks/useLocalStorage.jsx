import React from "react";

export function useLocalStorage(itemName, defaultItem){

  const [item, setItem] = React.useState(defaultItem);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(() => {
      try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(defaultItem));
        parsedItem = defaultItem;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }
      setLoading(false)
    }catch(error){
      setLoading(false)
      setError(true)
    }
    },2000)
  })

  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }; 

  return {item, saveItem, loading, error}
}