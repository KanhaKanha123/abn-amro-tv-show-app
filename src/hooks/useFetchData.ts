import { useEffect, useReducer, useRef, useState } from 'react';
import { formatShowsData } from '../helpers/formatData';
import { InitialState, articleReducer } from '../store/reducers/showsReducer';
import { fetchShows } from '../api/fetchShows';
//custom hook to manage api call to get data
const useFetchData = () => {
    const [state, dispatch] = useReducer(articleReducer, InitialState);
    const page = useRef(0);
    let firstUpdate = useRef<Boolean>(false);

    const getData = async () => {
        try {
            const result = await fetchShows(page.current);

            dispatch({ type: "DATA_SUCCESS", payload: formatShowsData(result) });

            page.current++;

            if (result.length === 0) {
                // hasMoreShows.value = false;
            }
        } catch (e) {
            const err = e as Error;
            dispatch({ type: "DATA_ERROR", payload: err.message });
        } finally {
            // isLoading.value = false;
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


