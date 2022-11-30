import Show from '../Show';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { ShowComponentMockProps } from './fixture/test-data';
import * as router from 'react-router'

const navigate = jest.fn()
// const navigateToShowDetails = jest.fn()

describe('Show component test', () => {
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
        render(<Show item={ShowComponentMockProps} />);
    });

    test("Show component load correctly", () => {
        const wrapper = screen.getByTestId("show-details-container");
        const image = screen.getByTestId("show-details-image");

        // check element exist
        expect(wrapper).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });

    test("Show component should recieve correct props", () => {
        const showName = screen.getByTestId("show-details-name");
        const showGenres = screen.getByTestId("show-details-genres");

        //check tags have coorect values
        expect(showName).toHaveTextContent('Under')
        expect(showGenres).toHaveTextContent('Drama')
    });

    test("navigateToShowDetails should be called", async () => {
        const element = await renderer.create(<Show item={ShowComponentMockProps} />);
        const showCard = screen.getByTestId("show-details-card");
        fireEvent.click(showCard);
        // navigateToShowDetails(ShowComponentMockProps);
        expect(navigate).toHaveBeenCalled;
    });

    test("Show component should match snapshot", async () => {
        const element = await renderer.create(<Show item={ShowComponentMockProps} />);
        expect(element.toJSON()).toMatchSnapshot();
    });

});
