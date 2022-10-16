import React, { useState } from 'react'

function useLocalStorage(key,initialValue) {
    const handleValue = (key, initialValue) => {
      const itemFromStorage = localStorage.getItem(key);

      return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
    };

  const [localStorageValue,setLocalStorageValue]=useState(()=>handleValue(key,initialValue))

  
  const setValue=(value)=>{
    const valueToStore= value instanceof Function ? value(localStorageValue) : value

    setLocalStorageValue(valueToStore)

    localStorage.setItem(key,JSON.stringify(valueToStore))

  }
  return [localStorageValue,setValue]
}

export default useLocalStorage