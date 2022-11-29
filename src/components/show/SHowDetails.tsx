import { Link, useLocation } from "react-router-dom"
import { RoutesConfig } from '../../constants/routes.constant';
import parse from 'html-react-parser'
import Rating from "../../shared-components/ratings/Rating";

const ShowDetails = () => {
    const { state: { showDetails } } = useLocation();

    return (<section className="show-details-container">
        <Link className="navigate-link" to={RoutesConfig.dashboard} color="primary">Go To Dashboard </Link>

        {!showDetails && <h1>No Data Available</h1>}

        {showDetails && (<article>
            <h1>{showDetails.fullName}</h1>
            <img src={showDetails.image} alt={showDetails.name} />
            <p>{parse(showDetails.summary)}</p>

            <h2>Genre</h2>
            <p>{showDetails.genres}</p>

            <h2>Rating</h2>
            <span>{showDetails.rating}</span>
            (<Rating rating={(showDetails.rating)}></Rating>)
        </article>)
        }
    </section>)
}

export default ShowDetails;