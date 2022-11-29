import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating, onClickHandler, style }: any) => {

    const renderTemplateWithHalfStar = (rating: number, i: number) => (<span key={i} {...(onClickHandler && { onClick: () => onClickHandler(i + 1) })} style={style}>
        {rating - 1 > i ? (<AiFillStar fontSize="15px" />) : (rating > i ? (<BsStarHalf fontSize="15px" />) : <AiOutlineStar fontSize="15px" />)}
    </span>
    );

    const renderTemplateWithFullStar = (rating: number, i: number) => (<span key={i} {...(onClickHandler && { onClick: () => onClickHandler(i + 1) })} style={style}>
        {rating > i ? (<AiFillStar fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)}
    </span>
    );

    return (<>
        {[...Array(10)].map((_, i: number) => {
            return (rating % 2 !== 0) ? renderTemplateWithHalfStar(rating, i) : renderTemplateWithFullStar(rating, i)
        })}
    </>);
}

export default Rating;