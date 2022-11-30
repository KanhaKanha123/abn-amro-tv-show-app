import { showReducer } from '../ShowsReducer';

describe('ShowReducer test', () => {

    test("ShowReducer SUCCESS should return correct state", () => {

        const state = showReducer({
            showsData: [],
            error: '',
            loading: true
        }, { type: "DATA_SUCCESS", payload: [{ id: 1 }] });

        expect(state).toEqual({
            showsData: [{ id: 1 }],
            error: '',
            loading: false
        });
    });

    test("ShowReducer ERROR should return correct state", () => {

        const state = showReducer({
            showsData: [],
            error: '',
            loading: true
        }, { type: "DATA_ERROR", payload: "Error" });

        expect(state).toEqual({
            showsData: [],
            error: 'Error',
            loading: false
        });
    });

    test("ShowReducer should return default state", () => {

        const state = showReducer({
            showsData: [],
            error: '',
            loading: true
        }, { type: "BY_SEARCH_TERM1", payload: [] });

        expect(state).toEqual({
            showsData: [],
            error: '',
            loading: true
        });
    });
});
