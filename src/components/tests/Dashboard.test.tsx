import Dashboard from '../Dashboard';
import renderer from 'react-test-renderer';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import useFetchData from '../../hooks/useFetchData';
import { ShowsFilterState } from '../../store/context/Context';

describe('Dashboard component test', () => {

    test("Dashboard component load correctly", () => {

        act(() => { render(<Dashboard />) });
        renderHook(async () => { await act(() => { useFetchData() }) });
        renderHook(async () => { await act(() => { ShowsFilterState() }) });

        waitFor(() => {
            const wrapper = screen.getByTestId("dashboard-parent-container");
            const genreTextContainer = screen.getByTestId("dashboard-genre-text");

            // check element exist
            expect(wrapper).toBeInTheDocument();
            expect(genreTextContainer).toBeInTheDocument();
        });
    });

    test("Dashboard component should match snapshot", async () => {
        const element = await renderer.create(<Dashboard />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
