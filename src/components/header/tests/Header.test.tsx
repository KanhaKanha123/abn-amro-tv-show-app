import Header from '../Header';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { ShowsAppState } from '../../../store/context/Context';
import { MemoryRouter } from 'react-router-dom';

const filterDispatch = jest.fn()

describe('Header component test', () => {
    test("Header component load correctly", () => {
        act(() => { render(<Header />, { wrapper: MemoryRouter }) });
        renderHook(async () => { await act(() => { ShowsAppState() }) });

        waitFor(() => {
            const wrapper = screen.getByTestId("header");
            const searchTextBox = screen.getByTestId("search-text");
            const headerAnchor = screen.getByText(/TV SHOWS/i);

            // check element exist
            expect(wrapper).toBeInTheDocument();
            expect(headerAnchor).toBeInTheDocument();
            expect(searchTextBox).toBeInTheDocument();
        });
    });

    test("dispatchFilterAction should be called", async () => {
        await act(() => { render(<Header />, { wrapper: MemoryRouter }) });
        renderHook(async () => { await act(() => { ShowsAppState() }) });

        const inputSearchText = screen.getByTestId("search-text");
        fireEvent.change(inputSearchText, { target: { value: 'a' } });
        expect(filterDispatch).toHaveBeenCalled;
    });
});
