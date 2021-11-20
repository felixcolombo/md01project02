import React from "react";
import StoreContext from "../StoreContext";
import UseStorage from "../../assets/UseStorage";

const StoreUser = ({children}) => {
    const [key, setKey] = UseStorage('Key');

    return (
        <StoreContext.Provider
            value={{
                key,
                setKey,
            }}
            
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreUser;