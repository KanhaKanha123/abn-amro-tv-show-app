import { filterReducer } from '../FilterReducer';

describe('filterReducer test', () => {

    test("filterReducer should return correct state", () => {

        const state = filterReducer({ searchTerm: "", filteredData: [] }, { type: "BY_SEARCH_TERM", payload: "abc" });

        expect(state).toEqual({ searchTerm: "abc", filteredData: [] });
    });

    test("filterReducer should return correct state for filteredData", () => {

        const state = filterReducer({ searchTerm: "abc", filteredData: [] }, { type: "FILTERED_DATA", payload: [{ data: 1 }] });

        expect(state).toEqual({ searchTerm: "abc", filteredData: [{ data: 1 }] });
    });

    test("filterReducer should return default state", () => {

        const state = filterReducer({ searchTerm: "", filteredData: [] }, { type: "BY_SEARCH_TERM1", payload: "abc" });

        expect(state).toEqual({ searchTerm: "", filteredData: [] });
    });
});
