import './App.css';
import { useRoutes } from 'react-router-dom';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import Login from './pages/login/Login';

function App() {
    const elements = useRoutes([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/taskdetail',
            element: <TaskDetail />,
        },
    ]);
    return elements;
}

export default App;
