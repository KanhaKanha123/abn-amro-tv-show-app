import { Fragment, useRef, useState } from "react";
import Show from "./Show";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RoutesConfig } from '../../constants/constant';
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

        if (itemsPerPage.current > showsList.length) {
            return currentItem + showsList.length;
        }

        return currentItem + itemsPerPage.current;
    }

    const renderEmptyTemplate = () => (<Fragment>
        {showsList.length == 0 && <h1 aria-label="No data available for listing shows" data-testid="shows-list--no-data">No Data Available</h1>}
    </Fragment>);

    const renderPaginationTemplate = () => (<Fragment>
        <span aria-label="start and end count of records on current page">Records {currentItem + 1} to {calculateEndNumber()}</span>
        <section aria-label="pagination arrow buttons" data-testid="shows-list--pagination" className={`pagination-buttons-container ${showsList.length > itemsPerPage.current ? '' : 'hide-pagination'}`}>
            <BsFillArrowLeftCircleFill aria-label="pagination forward arrow button" className="pagination-button-pointer" onClick={() => setOffset(currentItem - itemsPerPage.current)} fontSize="25px" />
            <BsFillArrowRightCircleFill aria-label="pagination backword arrow button" className="pagination-button-pointer" onClick={() => setOffset(currentItem + itemsPerPage.current)} fontSize="25px" />
        </section>
    </Fragment>)

    return (<Fragment>
        {renderEmptyTemplate()}

        {showsList.length > 0 && (<Fragment>
            <section aria-label="List of shows genre wise, 6 items per page" data-testid="shows-list--container" className="shows-list-container">
                {(paginatedShows() || []).map((showData: ShowType) => (<Show key={Math.random()} item={showData}></Show>))}
            </section>

            <section aria-label="pagination section of show" data-testid="shows-list--pagination-container" className="pagination-container">
                {renderPaginationTemplate()}
            </section>
        </Fragment>)
        }
    </Fragment>
    )
}

export default ShowList;