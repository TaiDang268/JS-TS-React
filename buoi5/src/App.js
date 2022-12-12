import './App.css';
// import { useRoutes } from 'react-router-dom';
import useRouteElements from './hooks/useRouteElements';

const App = () => {
    const elements = useRouteElements();
    return <>{elements}</>;
};

export default App;
