import React, { createContext, useState } from 'react'

export const CartCounterContext = createContext(0);

export default function CartCounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }
  return (
    <CartCounterContext.Provider value={value}>
      {children}
    </CartCounterContext.Provider>
  )
}
