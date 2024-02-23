import { render, screen } from "@testing-library/react";
import Input from "../Input";

// test("renders Input component", async () => {
// 	render(
// 		<Input
// 			label='Test Label'
// 			name='testInput'
// 			value='testValue'
// 			onChange={() => {}}
// 		/>
// 	);

// 	const inputElement = screen.getByLabelText("Test Label") as HTMLInputElement;

// 	// Use fireEvent to simulate change event
// 	fireEvent.input(inputElement, { target: { value: "newTestValue" } });

// 	// Wait for the update to be reflected
// 	await waitFor(() => {
// 		expect(inputElement.value).toBe("newTestValue");
// 	});
// });
test("renders disabled Input component", async () => {
	render(
		<Input
			label='Disabled Input'
			name='disabledInput'
			value=''
			onChange={() => {}}
			disabled
		/>
	);

	const disabledInputElement = screen.getByLabelText(
		"Disabled Input"
	) as HTMLInputElement;

	expect(disabledInputElement).toBeInTheDocument();
	expect(disabledInputElement).toBeDisabled();
});
