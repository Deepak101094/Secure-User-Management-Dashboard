import { ChangeEvent, FormEvent, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../utils/service";
import { toast } from "react-toastify";

import { Heading, Button, Input } from "../components";

const initialData = {
	email: "",
	password: "",
};
const RegisterPage = () => {
	const navigate = useNavigate();
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
			const response = await signUp(userData);
			toast.success("Registration Successfully");
			setUserData(initialData);
			navigate("/");
			console.log("Sign Up Response:", response.message);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div className='mt-32 shadow-2xl w-1/2 mx-auto py-6'>
			<form onSubmit={onSubmitHandler} className='max-w-md mx-auto '>
				<Heading title='Register' center />
				<div className='flex flex-col gap-3 mt-8'>
					<Input
						name='email'
						value={userData.email}
						label='Email'
						// disabled
						onChange={handleChange}
					/>
					<Input
						name='password'
						value={userData.password}
						onChange={handleChange}
						label='Password'
						type='password'
						// disabled
					/>
					<Button outline label='Sign Up' type='submit' />
				</div>
			</form>
			<hr className='mx-auto max-w-lg' />
			<div className='text-center mt-8'>
				<span className='text-md'>
					Already have an account?{" "}
					<Link to='/' className='text-blue-800 font-bold underline'>
						Sign In
					</Link>
				</span>
			</div>
		</div>
	);
};

export default RegisterPage;
