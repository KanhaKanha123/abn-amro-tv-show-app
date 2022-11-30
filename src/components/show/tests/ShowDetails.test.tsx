import ShowDetails from '../ShowDetails';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import * as router from 'react-router'
import { RoutesConfig } from '../../../constants/constant';

const useLocation = jest.fn()

describe.skip('ShowDetails component test', () => {
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => useLocation)
    });

    test("ShowDetails component load correctly", () => {
        const wrapper = screen.getByTestId("sshow-detail--main-container");
        const image = screen.getByTestId("show-detail-image");

        // check element exist
        expect(wrapper).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });

    test("ShowDetails component should recieve correct props", () => {
        const showName = screen.getByTestId("show-detail--full-name");
        const showSummmary = screen.getByTestId("show-detail-summary");
        const showGenres = screen.getByTestId("show-detail-genres");
        const showRating = screen.getByTestId("show-detail-rating");

        //check tags have coorect values
        expect(showName).toHaveTextContent('Under')
        expect(showGenres).toHaveTextContent('Drama')
        expect(showRating).toHaveTextContent('6.5')
        expect(showSummmary).toHaveTextContent('Under the Dome')
    });

    test("ShowDetails component should match snapshot", async () => {
        const element = await renderer.create(<ShowDetails />);
        expect(element.toJSON()).toMatchSnapshot();
    });

});
