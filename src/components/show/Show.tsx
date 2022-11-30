import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Rating from '../ratings/Rating';
import { RoutesConfig } from '../../constants/constant';
import { ShowType } from '../../types/types';

const Show = ({ item }: any) => {
    const navigate = useNavigate();

    const navigateToShowDetails = (showDetails: ShowType): void => {
        navigate(RoutesConfig.showDetails, { state: { showDetails } });
    };

    return <main aria-label='TV show detail cart' data-testid="show-details-container" className="show-details">
        <Card data-testid="show-details-card" className='card-container' onClick={() => navigateToShowDetails(item)}>
            <Card.Img aria-label="Image of show" data-testid="show-details-image" variant='top' src={item.image} alt="show image here"></Card.Img>
            <Card.Subtitle aria-label="name of show" data-testid="show-details-name" className='show-name'>{item.name}</Card.Subtitle>
            <Card.Subtitle className='card-subtitle'>
                <Card.Text aria-label="genres of show" data-testid="show-details-genres" className='small-text'>{item.genres}</Card.Text>
                <Rating aria-label="Average rating of show" rating={(item.rating)}></Rating>
            </Card.Subtitle>
        </Card>
    </main>
}

export default Show;