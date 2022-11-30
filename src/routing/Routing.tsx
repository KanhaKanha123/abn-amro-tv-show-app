import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { RoutesConfig } from '../constants/routes.constant';
import ShowDetails from '../components/show/ShowDetails';
import Header from '../components/header/Header';
import ErrorBoundary from '../error-boundries/ErrorBoundry';

const Routing = () => (<>
    <Router>
        <ErrorBoundary>
            <Header />
        </ErrorBoundary>
        <Routes>
            <Route path={RoutesConfig.dashboard} element={<ErrorBoundary><Dashboard /></ErrorBoundary>}>
            </Route>
            <Route path={RoutesConfig.showDetails} element={<ErrorBoundary><ShowDetails /></ErrorBoundary>}>
            </Route>
        </Routes>
    </Router>
</>);

export default Routing;
