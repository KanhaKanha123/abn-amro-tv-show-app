import { Container, Navbar, FormControl, Nav } from 'react-bootstrap';
import { MdAccountBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { debounce } from '../../helpers/formatData';
import { ShowsFilterState } from '../../store/context/Context';

const Header = () => {

    const { filterDispatch } = ShowsFilterState() || { filterDispatch: () => { } };

    const dispatchFilterAction = async (e: any) => {

        const sleep = await debounce(500);

        filterDispatch({ type: "BY_SEARCH_TERM", payload: e.target.value })
    }

    return (<Navbar aria-label='tv show header' data-testid="header" bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>TV SHOWS</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl aria-label='tv show search textbox' data-testid="search-text"
                    placeholder='Search a show'
                    className='m-auto'
                    onChange={(e) => dispatchFilterAction(e)}>
                </FormControl>
            </Navbar.Text>
            <Navbar.Brand>
                <MdAccountBox fontSize="35" />
            </Navbar.Brand>
        </Container>
        <Nav></Nav>
    </Navbar>);
}

export default Header;