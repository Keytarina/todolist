import "./Sidebar.scss";

const Sidebar = ({ children, className }) => {
	return <aside className={`Sidebar ${className}`}>{children}</aside>;
};

export default Sidebar;
