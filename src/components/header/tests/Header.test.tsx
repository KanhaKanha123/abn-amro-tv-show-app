import Header from '../Header';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import { ShowsFilterState } from '../../../store/context/Context';
import { MemoryRouter } from 'react-router-dom';

describe('Header component test', () => {
    test("Header component load correctly", () => {
        act(() => { render(<Header />, { wrapper: MemoryRouter }) });
        renderHook(async () => { await act(() => { ShowsFilterState() }) });

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
});
