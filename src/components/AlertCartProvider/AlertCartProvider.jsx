import React, { createContext, useState } from 'react'

export const AlertCartContext = createContext(null)

export default function AlertCartProvider({ children }) {
    const [alert, setAlert] = useState("");

    const value = {
        alert, setAlert
    }
    return (
        <AlertCartContext.Provider value={value}>
            {children}
        </AlertCartContext.Provider>
    )
}
