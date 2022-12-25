import './App.css';
import { useRoutes } from 'react-router-dom';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import Login from './pages/login/Login';

function App() {
    const elements = useRoutes([
        {
            path: '/taskdetail',
            element: <TaskDetail />,
        },
        {
            path: '/login',
            element: <Login />,
        },
    ]);
    return elements;
}

export default App;
