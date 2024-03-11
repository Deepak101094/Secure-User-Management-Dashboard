import { Layout } from "../components";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<Layout>
			<div className='bg-white p-6 m-12 rounded-lg shadow-lg'>
				<h2 className='text-2xl font-semibold mb-4'>
					Welcome to Your Dashboard
				</h2>
				<p className='text-gray-600'>This is the Dashboard Page.</p>
				<div className='mt-4'>
					<Link to='/users'>
						<button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'>
							Check the UserList
						</button>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
