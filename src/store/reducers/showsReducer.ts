export const articleReducer = (state: any, action: any) => {
    try {
        switch (action.type) {
            case "DATA_SUCCESS":
                return {
                    ...state,
                    showsData: action.payload,
                    error: '',
                    loading: false
                }
                break;
            case "DATA_ERROR":
                return {
                    ...state,
                    showsData: [],
                    error: action.payload,
                    loading: false
                }
                break;
            default:
                return state;
        }
    } catch (err) {
        console.error(err);
    }

}

export const InitialState = {
    showsData: [],
    error: '',
    loading: true
}