import { Fragment } from 'react';
import Header from './components/header/Header';
import ErrorBoundary from './error-boundries/ErrorBoundry';
import Routing from './routing/Routing';

function App() {
  return (<Fragment>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <Routing></Routing>
  </Fragment>);
}

export default App;
