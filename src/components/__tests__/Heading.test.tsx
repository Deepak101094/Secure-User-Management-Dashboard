import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Heading from "../Heading";

test("renders Heading component with title", () => {
	render(
		<BrowserRouter>
			<Heading title='Test Title' />
		</BrowserRouter>
	);
	const titleElement = screen.getByText("Test Title");
	expect(titleElement).toBeInTheDocument();
});

test("renders Heading component with subtitle", () => {
	render(
		<BrowserRouter>
			<Heading title='subtitle' />
		</BrowserRouter>
	);
	const subtitleElement = screen.getByText("subtitle");
	expect(subtitleElement).toBeInTheDocument();
});
