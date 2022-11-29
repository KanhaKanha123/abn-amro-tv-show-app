import {createContext,useContext,useReducer} from 'react';
 import {filterReducer}  from '../reducers/FilterReducer';

 type ChildrenProps={
    children:React.ReactNode 
 }
type ProductProp={
    id:number,
    name:string,
    price:number,
    image:string,
    inStock:[],
    fastDelivery:boolean,
    ratings:[]
}

 type CotextProps={
products:ProductProp[]
 }

const CartContext=createContext<any | null>(null);

const Context=({children}:ChildrenProps)=>{

const [filterState,filterDispatch]=useReducer(filterReducer,{
    byStock:false,
    fastDelivery:false,
    byRating:0,
    searchTerm:""
});

return <CartContext.Provider value={{filterState,filterDispatch}}>{children}</CartContext.Provider>
}

export default Context;
/*
export const showsFilterState=()=>{
    return useContext(CartContext);
}
*/