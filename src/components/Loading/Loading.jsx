import imgLoading from "../../assets/gif/loading.gif";
import "./Loading.scss";

export default function Loading() {
	return (
		<div className="Loading">
			<img src={imgLoading} alt="Loading image" />
		</div>
	);
}
