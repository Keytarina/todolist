import StatusFilter from "../StatusFilter/StatusFilter";
import { IoIosMenu } from "react-icons/io";
import IconButton from "../IconButton/IconButton";
import "./Header.scss";

const Header = ({ toggleSidebar, children }) => {
	return (
		<header>
			<div className="Header">
				<IconButton onClick={toggleSidebar} className="openSidebar">
					<IoIosMenu size={36} />
				</IconButton>
				<StatusFilter />
			</div>

			{children}
		</header>
	);
};

export default Header;
