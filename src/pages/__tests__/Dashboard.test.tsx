import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Dashboard from "../Dashboard";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Layout from "../../components/Layout";

describe("Dashboard component", () => {
	test("renders Dashboard component with layout", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Layout>
						<Dashboard />
					</Layout>
				</BrowserRouter>
			</Provider>
		);

		// Check if the layout is rendered
		// const layout = screen.getAllByText("main");
		// expect(layout).toBeInTheDocument();

		// Check if the "Dashboard" text is present
		// const dashboardText = screen.getAllByText("Dashboard");
		// expect(dashboardText).toBeInTheDocument();
	});
});
