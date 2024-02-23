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
	});
});
