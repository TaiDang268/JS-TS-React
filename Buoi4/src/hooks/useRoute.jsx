import { useRoutes } from "react-router-dom";
import Login from "../pages/login/Login";
const useRoute=()=>{
    const elements=useRoutes([
        {path: "/login", element: <Login /> },
        
    ])

    return elements;
}

export default useRoute;