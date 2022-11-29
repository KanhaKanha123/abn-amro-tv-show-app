export const filterReducer = (state: any, action?: any) => {
    switch (action.type) {
        case "BY_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload
            }
            break;
        default:
            return {
                searchTerm: ""
            };
    }
}