interface InputProps {
	label?: string;
	type?: string;
	name?: string;
	disabled?: boolean;
	formatLabel?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	label,
	type = "text",
	disabled,
	formatLabel,
	name,
	value,
	onChange,
}) => {
	const id = `input-${name}`;
	return (
		<div className=' relative'>
			<input
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				type={type}
				disabled={disabled}
				placeholder=' '
				className='
            peer
            w-full
            p-4
            pt-6
            font-light
            rounded-md
            bg-white
             border-2
            border-black
            outline-none
            transition
            disabled:cursor-not-allowed
            disabled:opacity-70
        
        '
			/>
			<label
				htmlFor={id}
				className={`
                absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
                ${formatLabel ? "left-9" : "left-4"}

        peer-placeholder-shown:scale-100
      
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
       
                `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
