import Rating from '../Rating';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

describe('Rating component test', () => {

    test("Rating component load correctly,Full stars are loaded", () => {
        render(<Rating rating={10} />);

        const ratingFullStarElement = screen.getByTestId("rating-full-star10");
        // check element exist
        expect(ratingFullStarElement).toBeInTheDocument();
    });

    test("Rating component load correctly,Half stars are loaded", () => {
        render(<Rating rating={9.5} />);

        const ratingHalfStarElement = screen.getByTestId("rating-half-star10");
        // check element exist
        expect(ratingHalfStarElement).toBeInTheDocument();
    });

    test("Rating component should match snapshot", async () => {
        const element = await renderer.create(<Rating rating={6} />);
        expect(element.toJSON()).toMatchSnapshot();
    });

});
