import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("renders Button component", () => {
	render(<Button label='Click me' />);
	const buttonElement = screen.getByText("Click me");
	expect(buttonElement).toBeInTheDocument();
});

test("renders disabled Button component", () => {
	render(<Button label='Click me' disabled />);
	const buttonElement = screen.getByText("Click me") as HTMLButtonElement;
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement.disabled).toBe(true);
});

test("renders Button component with custom type", () => {
	render(<Button label='Click me' type='submit' />);
	const buttonElement = screen.getByText("Click me") as HTMLButtonElement;
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement.type).toBe("submit");
});
