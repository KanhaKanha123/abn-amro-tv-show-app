import {Container,Navbar,FormControl, Nav, Dropdown, Badge, Button} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { showsFilterState } from '../../store/context/Context';

const Header=()=>{

   // const {filterState,filterDispatch}=showsFilterState();
    
return <Navbar bg='dark' variant='dark' style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link to='/'>TV SHOWS</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:500}} 
             placeholder='Search a product'
             className='m-auto'> 
            </FormControl>
        </Navbar.Text>
    </Container>
    <Nav></Nav>
</Navbar>
}

export default Header;