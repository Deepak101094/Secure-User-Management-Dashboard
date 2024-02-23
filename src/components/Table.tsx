import React from "react";

interface TableProps {
	data: Array<{
		id: number;
		first_name: string;
		email: string;
		last_name: string;
	}>;
}

const Table: React.FC<TableProps> = ({ data }) => {
	return (
		<div className='p-4'>
			<table className='min-w-full bg-white border border-gray-300'>
				<thead>
					<tr>
						<th className='py-2 px-4 border-b'>S.No</th>
						<th className='py-2 px-4 border-b'>First Name</th>
						<th className='py-2 px-4 border-b'>Last Name</th>
						<th className='py-2 px-4 border-b'>Email</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, first_name, last_name, email }) => (
						<tr key={id}>
							<td className='py-2 px-4 text-center border-b'>{id}</td>
							<td className='py-2 px-4 text-center border-b'>{first_name}</td>
							<td className='py-2 px-4 text-center border-b'>{last_name}</td>
							<td className='py-2 px-4 text-center border-b'>{email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
