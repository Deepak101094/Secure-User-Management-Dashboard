import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { MemoryRouter } from "react-router-dom";

test("renders Sidebar component with links", () => {
	render(
		<MemoryRouter>
			<Sidebar />
		</MemoryRouter>
	);
	const dashboardLinks = screen.getAllByText("Dashboard");

	expect(dashboardLinks.length).toBeGreaterThanOrEqual(1);
});
