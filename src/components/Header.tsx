import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setToken } from "../redux/slices/authSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		localStorage.clear();
		dispatch(setToken(""));
		navigate("/");
		toast.success("Logout Successfull");
	};
	return (
		<>
			<header className='bg-gray-800 text-white p-4'>
				<div className='flex justify-between items-center'>
					<div className='text-xl font-semibold flex justify-between items-center'>
						Welcome, User!
					</div>
					<div className='cursor-pointer' onClick={handleLogout}>
						Logout
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
