export const showReducer = (state: any, action: any) => {
    switch (action.type) {
        case "DATA_SUCCESS":
            return {
                ...state,
                showsData: action.payload,
                error: '',
                loading: false
            }
        case "DATA_ERROR":
            return {
                ...state,
                showsData: [],
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export const InitialState = {
    showsData: [],
    error: '',
    loading: true
}