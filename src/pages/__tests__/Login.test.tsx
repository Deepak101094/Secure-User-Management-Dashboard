import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginPage from "../Login";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";

test("renders Login page", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		</Provider>
	);

	// Verify that the necessary elements are present on the page
	expect(screen.getByLabelText("Email")).toBeInTheDocument();
	expect(screen.getByLabelText("Password")).toBeInTheDocument();
	expect(screen.getByRole("button", { name: "SignIn" })).toBeInTheDocument();
});

test("updates email and password on input change", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<LoginPage />
			</BrowserRouter>
		</Provider>
	);

	const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
	const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

	fireEvent.change(emailInput, { target: { value: "test@example.com" } });
	fireEvent.change(passwordInput, { target: { value: "password123" } });

	expect(emailInput.value).toBe("test@example.com");
	expect(passwordInput.value).toBe("password123");
});

// Add more tests as needed based on your component behavior
