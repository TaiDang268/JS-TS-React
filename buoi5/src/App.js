import './App.css';
import { useRoutes } from 'react-router-dom';
import useRouteElements from './hooks/useRouteElements';
import Dashboard from './pages/Dashboard';
import Exam from './pages/Exam';
import ExamFinish from './pages/ExamFinish';

const App = () => {
    const elements = useRouteElements();
    return <>{elements}</>;
};

export default App;
