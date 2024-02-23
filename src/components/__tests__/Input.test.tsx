import { render, screen } from "@testing-library/react";
import Input from "../Input";

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
