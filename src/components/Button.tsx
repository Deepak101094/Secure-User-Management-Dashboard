import React from "react";

interface ButtonProps {
	label?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, type, disabled }) => {
	return (
		<button
			// onClick={onClick}
			disabled={disabled}
			type={type}
			className='
            relative
            disabled:opacity-70
            p-4
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            bg-black
            text-white
            '
		>
			{label}
		</button>
	);
};

export default Button;
