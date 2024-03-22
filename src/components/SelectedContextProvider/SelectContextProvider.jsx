import React, { createContext, useState } from 'react'

export const SelectedContext = createContext(null)

export default function SelectContextProvider({ children }) {
    const [selected, setSelected] = useState("");

    const value = {
        selected, setSelected
    }
    return (
        <SelectedContext.Provider value={value}>
            {children}
        </SelectedContext.Provider>
    )
}
