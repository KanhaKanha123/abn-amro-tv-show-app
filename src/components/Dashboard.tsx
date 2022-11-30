import { Container } from "react-bootstrap";
import useFetchData from "../hooks/useFetchData";
import ShowList from "./show/ShowList";
import './styles/Shows.Style.css';
import { ShowsFilterState } from '../store/context/Context';
import { filterBySearchTerm } from "../helpers/formatData";
import { Fragment } from "react";
import { ModifiedShows } from "../types/types";

const Dashboard = () => {

    const { state: { showsData, error, loading } } = useFetchData();

    const { filterState: { searchTerm } } = ShowsFilterState() || { filterState: { searchTerm: "" } };

    //Filter data here
    const filterData = () => {
        let filteredObj: ModifiedShows[] = showsData;

        if (searchTerm) {
            filteredObj = filterBySearchTerm(showsData, searchTerm);
        }

        return filteredObj;
    };

    return (<div className="dashboard">
        <Container data-testid="dashboard-parent-container" className="parent-container">
            <div className="error-empty-container ">
                {loading && <div data-testid="dashboard-loader" className="loader"></div>}

                {error && <h1 data-testid="dashboard-api-error">{error}</h1>}

                {!error && filterData().length === 0 && <h1 data-testid="dashboard-no-data">No Data Available</h1>}
            </div>
            {(filterData() || []).map((item: ModifiedShows) => (<Fragment key={Math.random() * 1000}>
                {(item.showsList.length > 0 && <div>
                    <span data-testid="dashboard-genre-text" className="genre-text">{item.genreName} (Total Records: {item.showsList.length})</span>
                    <ShowList showsList={item.showsList}></ShowList>
                </div>)}
            </Fragment>))}
        </Container>
    </div>
    )
}

export default Dashboard;