import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filltersSlice";
import "./StatusFilter.scss";

const StatusFilter = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filters.status);

	const handleFilterChange = (filter) => {
		dispatch(setStatusFilter(filter));
	};

	return (
		<div className="StatusFilter">
			Filter by status
			<button
				selected={filter === "all"}
				onClick={() => handleFilterChange("all")}
				className={`StatusFilter__button ${
					filter === "all" ? "StatusFilter__button--active" : ""
				}`}
			>
				All {filter === "all" && "is active"}
			</button>
			<button
				selected={filter === "active"}
				onClick={() => {
					handleFilterChange("active");
				}}
				className={`StatusFilter__button ${
					filter === "active" ? "StatusFilter__button--active" : ""
				}`}
			>
				Active {filter === "active" && "is active"}
			</button>
			<button
				selected={filter === "completed"}
				onClick={() => {
					handleFilterChange("completed");
				}}
				className={`StatusFilter__button ${
					filter === "completed" ? "StatusFilter__button--active" : ""
				}`}
			>
				Completed {filter === "completed" && "is active"}
			</button>{" "}
		</div>
	);
};

export default StatusFilter;
