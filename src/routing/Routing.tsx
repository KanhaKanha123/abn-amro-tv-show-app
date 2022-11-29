import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { RoutesConfig } from '../constants/routes.constant';
import ShowDetails from '../components/show/SHowDetails';
import Header from '../components/header/Header';

const Routing = () => (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path={RoutesConfig.dashboard} element={<Dashboard />}>
            </Route>
            <Route path={RoutesConfig.showDetails} element={<ShowDetails />}>
            </Route>
        </Routes>
        </BrowserRouter>);

export default Routing;
