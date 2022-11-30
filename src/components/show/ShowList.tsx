import { useRef, useState } from "react";
import Show from "./Show";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RoutesConfig } from '../../constants/routes.constant';
import { ShowType } from "../../types/types";

const ShowList = ({ showsList }: any) => {
    const itemsPerPage = useRef<number>(RoutesConfig.itemPerGenre);

    let [currentItem, setCurrentItemState] = useState(0)

    const paginatedShows = () => {
        return showsList.slice(
            currentItem,
            currentItem + itemsPerPage.current
        );
    };

    const setOffset = (offset: number): void => {
        if (offset < 0) {
            return;
        }
        if (offset > showsList.length) {
            return;
        }
        setCurrentItemState(offset);
    };

    const calculateEndNumber = () => {
        if (currentItem + itemsPerPage.current > showsList.length) {
            const diff = (currentItem + itemsPerPage.current) - showsList.length;
            return (currentItem + itemsPerPage.current) - diff;
        }

        return currentItem + itemsPerPage.current;
    }

    return (<>
        {showsList.length == 0 && <h1 data-testid="shows-list--no-data">No Data Available</h1>}

        {showsList.length > 0 && (<>
            <div data-testid="shows-list--container" className="shows-list-container">
                {(paginatedShows() || []).map((showData: ShowType) => (<Show key={Math.random()} item={showData}></Show>))}
            </div>
            <div data-testid="shows-list--pagination-container" className="pagination-container">
                <span>{currentItem + 1} to {calculateEndNumber()}</span>
                <div data-testid="shows-list--pagination" className={showsList.length > 6 ? '' : 'hide-pagination'}>
                    <BsFillArrowLeftCircleFill onClick={() => setOffset(currentItem - itemsPerPage.current)} fontSize="25px" />
                    <BsFillArrowRightCircleFill onClick={() => setOffset(currentItem + itemsPerPage.current)} fontSize="25px" />
                </div>
            </div>
        </>)
        }
    </>
    )
}

export default ShowList;