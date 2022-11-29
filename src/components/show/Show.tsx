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

    return <div className="show-details">
        <Card className='card-container' onClick={() => navigateToShowDetails(item)}>
            <Card.Img variant='top' src={item.image} alt={item.name}></Card.Img>
            <Card.Subtitle className='show-name'>{item.name}</Card.Subtitle>
            <Card.Subtitle className='card-subtitle'>
                <Card.Text className='small-text'>{item.genres}</Card.Text>
                <Rating rating={(item.rating)}></Rating>
            </Card.Subtitle>
        </Card>
    </div>
}

export default Show;