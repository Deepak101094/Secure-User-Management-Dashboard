import { useRoutes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import MainRoute from "./MainRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function RootRoute() {
	const userToken = useSelector((state: RootState) => state.auth.token);
	let routes = [];
	routes = userToken ? MainRoute : AuthRoute;
	return useRoutes(routes);
}
