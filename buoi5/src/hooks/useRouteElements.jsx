import { useRoutes } from 'react-router-dom';

import DashBoard from '../pages/Dashboard';
import Exam from '../pages/Exam';
import ExamFinish from '../pages/ExamFinish';
import Login from '../pages/Login';

const useRouteElements = () => {
    const elements = useRoutes([
        { path: '/login', element: <Login /> },

        { path: '/dashboard', element: <DashBoard /> },
        { path: '/exam', element: <Exam /> },
        { path: '/examfinish', element: <ExamFinish /> },
    ]);

    return elements;
};

export default useRouteElements;
