import { Fragment } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating, onClickHandler, style }: any) => {

    const renderTemplateWithHalfStar = (rating: number, i: number) => (<span aria-label='rating star image' key={i} {...(onClickHandler && { onClick: () => onClickHandler(i + 1) })} style={style}>
        {rating - 1 > i ? (<AiFillStar fontSize="15px" />) : (rating > i ? (<BsStarHalf data-testid={`rating-half-star${i + 1}`} fontSize="15px" />) : <AiOutlineStar fontSize="15px" />)}
    </span>
    );

    const renderTemplateWithFullStar = (rating: number, i: number) => (<span aria-label='rating star image' key={i} {...(onClickHandler && { onClick: () => onClickHandler(i + 1) })} style={style}>
        {rating > i ? (<AiFillStar data-testid={`rating-full-star${i + 1}`} fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)}
    </span>
    );

    return (<Fragment>
        {[...Array(10)].map((_, i: number) => {
            return (rating % 2 !== 0) ? renderTemplateWithHalfStar(rating, i) : renderTemplateWithFullStar(rating, i)
        })}
    </Fragment>);
}

export default Rating;