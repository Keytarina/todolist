import "./IconButton.scss";

const IconButton = ({ onClick, children, className = "" }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`IconButton ${className}`}
		>
			{children}
		</button>
	);
};

export default IconButton;
