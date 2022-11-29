import { Container } from "react-bootstrap";
import useFetchData from "../hooks/useFetchData";
import ShowList from "./show/ShowList";
import './styles/Shows.Style.css';
import { ShowsFilterState } from '../store/context/Context';
import { filterBySearchTerm } from "../helpers/formatData";
import { Fragment, useEffect, useState } from "react";
import { ModifiedShows } from "../types/types";

const Dashboard = () => {

    const { state: { showsData } } = useFetchData();

    const { filterState: { searchTerm } } = ShowsFilterState();

    //Filter data here
    const filterData = () => {
        let filteredObj: ModifiedShows[] = showsData;

        if (searchTerm) {
            filteredObj = filterBySearchTerm(showsData, searchTerm);
        }

        return filteredObj;
    };

    return (<div className="dashboard">
        <Container className="parent-container">
            {filterData().length === 0 && <h1>No Data Available</h1>}
            {(filterData() || []).map((item: ModifiedShows) => (<Fragment key={Math.random() * 1000}>
                {(item.showsList.length > 0 && <div>
                    <span className="genre-text">{item.genreName} (Total Records: {item.showsList.length})</span>
                    <ShowList showsList={item.showsList}></ShowList>
                </div>)}
            </Fragment>))}
        </Container>
    </div>
    )
}

export default Dashboard;