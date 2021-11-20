import { createContext } from "react";

const StoreContext = createContext ({
    key: null,
    setKey: () => {},
});

export default StoreContext;