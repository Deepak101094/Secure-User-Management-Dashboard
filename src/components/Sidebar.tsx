import { Link } from "react-router-dom";
import { FaChartBar, FaUsers } from "react-icons/fa";

const Sidebar = () => {
	return (
		<div className='bg-gray-800 text-white h-screen w-1/6 p-4'>
			<div className='text-2xl font-semibold mb-16'>Dashboard</div>
			<ul className='flex flex-col gap-4'>
				<li>
					<Link to='/dashboard' className='mb-2 flex items-center'>
						<FaChartBar className='mr-2' />
						Dashboard
					</Link>
				</li>
				<li>
					<Link to='/users' className='mb-2 flex items-center'>
						<FaUsers className='mr-2' />
						User
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
