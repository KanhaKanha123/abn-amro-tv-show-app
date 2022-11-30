import { createContext, useContext, useReducer } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { filterReducer } from '../reducers/FilterReducer';

type ChildrenProps = {
    children: React.ReactNode
}

const CartContext = createContext<any | null>(null);

const Context = ({ children }: ChildrenProps) => {
    //get state from custome hook
    const { state } = useFetchData();

    //decare reducer for search filter
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        searchTerm: "",
        filteredData: []
    });

    return <CartContext.Provider value={{ state, filterState, filterDispatch }}>{children}</CartContext.Provider>
}

export default Context;

//hook which will provide application wise
export const ShowsAppState = () => {
    return useContext(CartContext);
}
