import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "../Header";
import { store } from "../../redux/store";

test("renders Header component with welcome message", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);
	const welcomeElement = screen.getByText("Welcome, User!");
	expect(welcomeElement).toBeInTheDocument();
});

test("renders Header component with logout button", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);
	const logoutButton = screen.getByText("Logout");
	expect(logoutButton).toBeInTheDocument();
});
