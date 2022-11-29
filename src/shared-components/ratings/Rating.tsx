import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, onClickHandler, style }: any) => {
    return <>
        {[...Array(10)].map((_, i) => (
            <span key={i} {...(onClickHandler && { onClick: ()=>onClickHandler(i+1) })} style={style}>
                {rating > i ? (<AiFillStar fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)}
            </span>
        ))}
    </>
}

export default Rating;