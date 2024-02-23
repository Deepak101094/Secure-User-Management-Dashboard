import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/UserList";

const MainRoute = [
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/users",
		element: <Users />,
	},
	{
		path: "*",
		element: <Navigate to='/dashboard' replace />,
	},
];
export default MainRoute;
