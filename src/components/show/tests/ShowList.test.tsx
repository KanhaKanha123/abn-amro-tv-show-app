import ShowList from '../ShowList';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MockShowListData } from './fixture/test-data';
import * as router from 'react-router'

const navigate = jest.fn()

describe('ShowList component test', () => {
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
        render(<ShowList showsList={MockShowListData} />);
    });

    test("ShowList component load correctly", () => {
        const wrapper = screen.getByTestId("shows-list--container");
        const paginationContainer = screen.getByTestId("shows-list--pagination-container");

        // check element exist
        expect(wrapper).toBeInTheDocument();
        expect(paginationContainer).toBeInTheDocument();
    });

    test("ShowList component should display no data message if props are empty", () => {
        const element = render(<ShowList showsList={[]} />);

        const noDataTemplate = screen.getByTestId("shows-list--no-data")
        expect(noDataTemplate).toHaveTextContent("No Data Available");
    });

    test("ShowList component should match snapshot", async () => {
        const element = await renderer.create(<ShowList showsList={MockShowListData} />);
        expect(element.toJSON()).toMatchSnapshot();
    });

});
