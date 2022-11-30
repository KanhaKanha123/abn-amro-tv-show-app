import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Rating from '../../shared-components/ratings/Rating';
import { RoutesConfig } from '../../constants/routes.constant';
import { ShowType } from '../../types/types';

const Show = ({ item }: any) => {
    const navigate = useNavigate();

    const navigateToShowDetails = (showDetails: ShowType): void => {
        navigate(RoutesConfig.showDetails, { state: { showDetails } });
    };

    return <div aria-label='tv show detail cart' data-testid="show-details-container" className="show-details">
        <Card data-testid="show-details-card" className='card-container' onClick={() => navigateToShowDetails(item)}>
            <Card.Img data-testid="show-details-image" variant='top' src={item.image} alt="show image here"></Card.Img>
            <Card.Subtitle data-testid="show-details-name" className='show-name'>{item.name}</Card.Subtitle>
            <Card.Subtitle className='card-subtitle'>
                <Card.Text data-testid="show-details-genres" className='small-text'>{item.genres}</Card.Text>
                <Rating rating={(item.rating)}></Rating>
            </Card.Subtitle>
        </Card>
    </div>
}

export default Show;