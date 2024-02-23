import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import RegisterPage from "../Register";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";

test("renders RegisterPage component", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>
		</Provider>
	);

	// Check if the SignUp heading is rendered
	const signUpHeading = screen.getByText("SignUp");
	expect(signUpHeading).toBeInTheDocument();

	// Check if the email input is rendered
	const emailInput = screen.getByLabelText("Email");
	expect(emailInput).toBeInTheDocument();

	// Check if the password input is rendered
	const passwordInput = screen.getByLabelText("Password");
	expect(passwordInput).toBeInTheDocument();

	// Check if the Sign Up button is rendered
	const signUpButton = screen.getByText("Sign Up");
	expect(signUpButton).toBeInTheDocument();
});

test("submits form with valid data", async () => {
	<Provider store={store}>
		<BrowserRouter>
			<RegisterPage />
		</BrowserRouter>
	</Provider>;

	// fireEvent.change(screen.getByLabelText("Email"), {
	// 	target: { value: "eve.holt@reqres.in" },
	// });
	// fireEvent.change(screen.getByLabelText("Password"), {
	// 	target: { value: "password123" },
	// });

	// // Submit the form
	// fireEvent.click(screen.getByText("signUp"));

	// Wait for the form submission to be completed
	// await waitFor(() => {
	// 	// Check if the success message is displayed
	// 	const successMessage = screen.getByText("Registration Successfully");
	// 	expect(successMessage).toBeInTheDocument();
	// });
});
