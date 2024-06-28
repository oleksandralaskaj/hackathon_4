import {createContext, useContext, useState} from 'react';

const SizeContext = createContext({size: {w: 200, h:200}, setSize: () => console.error('lol no provider')});

export function SizeContextProvider({children}) {
    const [size, setSize] = useState({w: 200, h:200})
    return (
        <SizeContext.Provider value={{size, setSize}}>
            {children}
        </SizeContext.Provider>
    )
}

export function useSizeContext() {
    return useContext(SizeContext);
}