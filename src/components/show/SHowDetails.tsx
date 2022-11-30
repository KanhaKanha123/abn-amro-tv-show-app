import { Link, useLocation } from "react-router-dom"
import { RoutesConfig } from '../../constants/constant';
import parse from 'html-react-parser'
import Rating from "../ratings/Rating";

const ShowDetails = () => {
    const { state: { showDetails } } = useLocation();

    return (<main aria-label="TV show detail" className="show-details-container">
        <nav aria-label="navigation link to go back to listing">
            <Link className="navigate-link" to={RoutesConfig.dashboard} color="primary">Go To Dashboard </Link>
        </nav>

        {!showDetails && <h1 data-testid="show-detail-no-data">No Data Available</h1>}

        {showDetails && <article aria-label="detail of tv show" data-testid="show-detail--main-container">
            <h1 aria-label="name of show" data-testid="show-detail--full-name">{showDetails.fullName}</h1>
            <img aria-label="Image of show" data-testid="show-detail-image" src={showDetails.image} alt={showDetails.name} />
            <span aria-label="summary of show" data-testid="show-detail-summary">{parse(showDetails.summary)}</span>
            <h2 aria-label="genres of show">Genre</h2>
            <span data-testid="show-detail-genres">{showDetails.genres}</span>
            <h2 aria-label="Average rating of show">Average Rating</h2>
            <span data-testid="show-detail-rating">{showDetails.rating}</span>
            <Rating rating={(showDetails.rating)}></Rating>
        </article>
        }
    </main>)
}

export default ShowDetails;