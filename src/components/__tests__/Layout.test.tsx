import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "../Layout";
import { store } from "../../redux/store";

test("renders Layout component with Sidebar and Header", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Layout>Test Content</Layout>
			</BrowserRouter>
		</Provider>
	);

	// Check if Header is rendered
	const headerElement = screen.getByText("Welcome, User!");
	expect(headerElement).toBeInTheDocument();

	// Check if the main content is rendered
	const contentElement = screen.getByText("Test Content");
	expect(contentElement).toBeInTheDocument();
});
