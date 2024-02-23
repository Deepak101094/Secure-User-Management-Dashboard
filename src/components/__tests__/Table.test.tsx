// Table.test.tsx

import { render, screen } from "@testing-library/react";
import Table from "../Table";

const testData = [
	{
		id: 1,
		first_name: "Michael",
		last_name: "Lawson",
		email: "michael.lawson@reqres.in",
	},
	{
		id: 2,
		first_name: "Lindsay",
		last_name: "Ferguson",
		email: "lindsay.ferguson@reqres.in",
	},
	// Add more test data as needed
];

test("renders Table component with data", () => {
	render(<Table data={testData} />);

	// Check if the table headers are rendered
	const headers = screen.getAllByRole("columnheader");
	expect(headers).toHaveLength(4); // Assuming 4 columns in the table

	// Check if the table rows are rendered
	const rows = screen.getAllByRole("row");
	expect(rows).toHaveLength(testData.length + 1); // Including the header row

	// Check if the table data is rendered correctly
	testData.forEach(({ id, first_name, last_name, email }) => {
		expect(screen.getByText(id.toString())).toBeInTheDocument();
		expect(screen.getByText(first_name)).toBeInTheDocument();
		expect(screen.getByText(last_name)).toBeInTheDocument();
		expect(screen.getByText(email)).toBeInTheDocument();
	});
});

// You can add more test cases based on your specific requirements.
