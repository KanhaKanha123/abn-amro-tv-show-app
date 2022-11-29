import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducers/FilterReducer';

type ChildrenProps = {
    children: React.ReactNode
}

const CartContext = createContext<any | null>(null);

const Context = ({ children }: ChildrenProps) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        searchTerm: ""
    });

    return <CartContext.Provider value={{ filterState, filterDispatch }}>{children}</CartContext.Provider>
}

export default Context;

export const ShowsFilterState = () => {
    return useContext(CartContext);
}
