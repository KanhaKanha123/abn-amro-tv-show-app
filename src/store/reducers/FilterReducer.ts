export const filterReducer = (state: any, action?: any) => {
    switch (action.type) {
        case "BY_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload
            }
        case "FILTERED_DATA":
            return {
                ...state,
                filteredData: action.payload
            }
        default:
            return {
                searchTerm: "",
                filteredData: []
            };
    }
}