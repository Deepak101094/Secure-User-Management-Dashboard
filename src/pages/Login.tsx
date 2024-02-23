import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../utils/service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const initialData = {
	email: "",
	password: "",
};
const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [userData, setUserData] = useState(initialData);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await signIn(userData);
			console.log("Sign In Response:", response?.token);
			dispatch(setToken(response?.token));
			localStorage.setItem("token", response?.token);
			toast.success("User logged In");
			setUserData(initialData);
			navigate("/dashboard");
		} catch (error: any) {
			console.error("Error signing in:", error.message);
		}
	};

	return (
		<div className='mt-32 shadow-2xl w-1/2 mx-auto py-6'>
			<form onSubmit={onSubmitHandler} className='max-w-md mx-auto '>
				<Heading title='SignIn' center />
				<div className='flex flex-col gap-3 mt-8'>
					<Input
						name='email'
						value={userData.email}
						label='Email'
						onChange={handleChange}
					/>
					<Input
						name='password'
						value={userData.password}
						onChange={handleChange}
						label='Password'
						type='password'
					/>
					<Button outline label='SignIn' type='submit' />
				</div>
			</form>
			<hr className='mx-auto max-w-lg' />
			<div className='text-center mt-8'>
				<span className='text-md'>
					Don't have an account?{" "}
					<Link to={"/register"} className='text-blue-800 font-bold underline'>
						Sign up
					</Link>
				</span>
			</div>
		</div>
	);
};

export default LoginPage;
