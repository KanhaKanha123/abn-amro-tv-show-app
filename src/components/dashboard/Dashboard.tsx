import { Container } from "react-bootstrap";
import ShowList from "../show/ShowList";
import { ShowsAppState } from '../../store/context/Context';
import { Fragment } from "react";
import { ModifiedShows } from "../../types/types";

const Dashboard = () => {
    //Read state from Context API store
    const { state, filterState: { searchTerm, filteredData } } = ShowsAppState() || ShowsAppState() || { state: { showsData: [], error: "", loading: false }, filterState: { searchTerm: "" }, filterDispatch: () => { } };

    const { showsData, error, loading } = state;

    let filteredShowsData: ModifiedShows[] = [];

    if (searchTerm === "") {
        filteredShowsData = showsData;
    } else {
        filteredShowsData = filteredData;
    }

    return (<Container aria-label="Main tv shows listing container" className="dashboard">
        <main data-testid="dashboard-parent-container" className="parent-container">
            <section aria-label="Section to display error or empty data messages" className="error-empty-container">
                {loading && <div aria-label="Loading spinner" data-testid="dashboard-loader" className="loader"></div>}
                {error && <h1 aria-label="Error message" data-testid="dashboard-api-error">{error}</h1>}
                {!error && filteredShowsData.length === 0 && <h1 aria-label="No tv shows available" data-testid="dashboard-no-data">No Data Available</h1>}
            </section>

            <section aria-label="TV shows listing by genres">
                {filteredShowsData.map((item: ModifiedShows) => (<Fragment key={Math.random() * 1000}>
                    {(item.showsList.length > 0 && <Fragment>
                        <span aria-label="Genre name and total count on top of each table" data-testid="dashboard-genre-text" className="genre-text">{item.genreName} (Total Records: {item.showsList.length})</span>
                        <ShowList showsList={item.showsList}></ShowList>
                    </Fragment>)}
                </Fragment>))}
            </section>
        </main>
    </Container>
    )
}

export default Dashboard;