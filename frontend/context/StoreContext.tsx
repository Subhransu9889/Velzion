import React, {createContext} from 'react'

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    const url = 'https://localhost:4000';
    const [token, setToken] = React.useState(null);

    const contextValue = {setToken, token, url}

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}