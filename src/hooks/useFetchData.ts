import { useEffect, useReducer, useRef } from 'react';
import { formatShowsData } from '../helpers/formatData';
import { InitialState, showReducer } from '../store/reducers/ShowsReducer';
import { fetchShows } from './api/fetchShows';

//custom hook to manage api call to get data
const useFetchData = () => {
    const [state, dispatch] = useReducer(showReducer, InitialState);
    const page = useRef(0);
    let firstUpdate = useRef<Boolean>(false);

    const getData = async () => {
        try {
            let result = [];
            const key = page.current.toString();
            //local cashing
            if (localStorage.getItem(key) !== "undefined") {
                result = JSON.parse(localStorage.getItem(key) || "");
            } else {
                result = await fetchShows(page.current);
                // And save the new key-value pair to the cache
                localStorage.setItem(key, JSON.stringify(result));
            }

            dispatch({ type: "DATA_SUCCESS", payload: formatShowsData(result) });
            //this will work if we want to render 1,2,3... page data. we can trigger useeffect accprdingly and useRef will increase count and ondemand will get page data. 
            //For now in his app i am getting only page=0 data
            // page.current++;
        } catch (e) {
            const err = e as Error;
            dispatch({ type: "DATA_ERROR", payload: 'Error in Api ' + err.message });
        }
    };

    useEffect(() => {
        try {
            //react 18 re mount the component, so to call only once maintating by useref
            if (!firstUpdate.current) {
                getData();
            }
            firstUpdate.current = true;
        } catch (err) {
            console.error(err);
        }
    }, []);

    return { state };
}

export default useFetchData;


