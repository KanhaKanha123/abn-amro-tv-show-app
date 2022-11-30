import { Container, Navbar, FormControl, Nav } from 'react-bootstrap';
import { MdAccountBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { debounce, filterBySearchTerm } from '../../helpers/formatData';
import { ShowsAppState } from '../../store/context/Context';

const Header = () => {

    const { state: { showsData }, filterDispatch } = ShowsAppState() || { state: { showsData: [] }, filterDispatch: () => { } };

    const dispatchFilterAction = async (e: any) => {

        const sleep = await debounce(500);

        if (e.target.value) {
            const filteredData = filterBySearchTerm(showsData, e.target.value);

            filterDispatch({ type: "FILTERED_DATA", payload: filteredData })
        } else {
            filterDispatch({ type: "FILTERED_DATA", payload: [] })
        }

        filterDispatch({ type: "BY_SEARCH_TERM", payload: e.target.value })
    }

    return (<Navbar aria-label='tv show header' data-testid="header" bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <Link aria-label='Link to go back to listing' to='/'>TV SHOWS</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl aria-label='tv show search textbox' data-testid="search-text"
                    placeholder='Search a show'
                    className='m-auto'
                    onChange={(e) => dispatchFilterAction(e)}>
                </FormControl>
            </Navbar.Text>
            <Navbar.Brand>
                <MdAccountBox className='hide-element' fontSize="35" />
            </Navbar.Brand>
        </Container>
        <Nav></Nav>
    </Navbar>);
}

export default Header;