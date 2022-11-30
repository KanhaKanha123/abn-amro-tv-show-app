import { Link, useLocation } from "react-router-dom"
import { RoutesConfig } from '../../constants/routes.constant';
import parse from 'html-react-parser'
import Rating from "../../shared-components/ratings/Rating";

const ShowDetails = () => {
    const { state: { showDetails } } = useLocation();

    return (<section className="show-details-container">
        <Link className="navigate-link" to={RoutesConfig.dashboard} color="primary">Go To Dashboard </Link>

        {!showDetails && <h1 data-testid="show-detail-no-data">No Data Available</h1>}

        {showDetails && (<article ata-testid="show-detail--main-container">
            <h1 data-testid="show-detail--full-name">{showDetails.fullName}</h1>
            <img data-testid="show-detail-image" src={showDetails.image} alt={showDetails.name} />
            <span data-testid="show-detail-summary">{parse(showDetails.summary)}</span>

            <h2>Genre</h2>
            <span data-testid="show-detail-genres">{showDetails.genres}</span>

            <h2>Average Rating</h2>
            <span data-testid="show-detail-rating">{showDetails.rating}</span>
            (<Rating rating={(showDetails.rating)}></Rating>)
        </article>)
        }
    </section>)
}

export default ShowDetails;