import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";

test("renders Layout component with Sidebar and Header", () => {
	render(
		<BrowserRouter>
			<Layout>Test Content</Layout>
		</BrowserRouter>
	);

	// Check if Header is rendered
	const headerElement = screen.getByText("Welcome, User!");
	expect(headerElement).toBeInTheDocument();

	// Check if the main content is rendered
	const contentElement = screen.getByText("Test Content");
	expect(contentElement).toBeInTheDocument();
});
