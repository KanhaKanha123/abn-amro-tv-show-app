export const filterReducer=(state:any,action?:any)=>{
    switch(action.type){
        case "SORT_BY_PRICE":
        return {
        ...state,
        sort:action.payload
    }
    break;
    
    case "BY_STOCK":
        return {
            ...state,
            byStock:!state.byStock
        }
    break;
    
    case "BY_FAST_DELIVERY":
        return {
            ...state,
            fastDelivery:!state.fastDelivery
        }
    break;
    case "BY_RATING":
        return {
            ...state,
            byRating:action.payload
        }
    break;
    
    case "BY_SEARCH_TERM":
        return {
            ...state,
            searchTerm:action.payload
        }
    break;
        default:
            return {
                byStock:false,
                fastDelivery:false,
                byRating:0,
                searchTerm:""
            };
    }
}