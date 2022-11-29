import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from '../shared-components/ratings/Rating';
// import { CartState } from './store/Context';

const Filter = () => {
    return <div className='filters'></div>
    /*
    const { filterState:{sort,byStock,
        fastDelivery,
        byRating}, filterDispatch } =[]// CartState();

    return <div className='filters'>
        <span className='title'>Filter Product</span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={"inline-1"}
                onChange={()=>filterDispatch({type:"SORT_BY_PRICE",payload:"ASC"})}
                checked={sort==="ASC"}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Dscending"
                name="group1"
                type="radio"
                id={"inline-2"}
                onChange={()=>filterDispatch({type:"SORT_BY_PRICE",payload:"DSC"})}
                checked={sort==="DSC"}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Exclude Out Of Stock"
                name="group1"
                type="checkbox"
                onChange={()=>filterDispatch({type:"BY_STOCK"})}
                id={"inline-3"}
                checked={byStock}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={"inline-4"}
                onChange={()=>filterDispatch({type:"BY_FAST_DELIVERY"})}
                checked={fastDelivery}
            />
        </span>
<span>
    <label style={{paddingRight:10}}>Rating: </label>
    <Rating rating={byRating} onClickHandler={(count:number)=>filterDispatch({type:"BY_RATING",payload:count})} style={{cursor:"pointer"}}/>
</span>
        <Button variant='light' onClick={()=>filterDispatch({type:"CLEAR_FILTER"})}>Clear filter</Button>
    </div>
*/
}

export default Filter;
