import Routing from './routing/Routing';
import ErrorBoundary from './error-boundries/ErrorBoundry';

function App() {
  return (
    <div className="App">
       <ErrorBoundary>
        <Routing></Routing>
        </ErrorBoundary>
    </div>
  );
}

export default App;
