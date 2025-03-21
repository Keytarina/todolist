import imgNoFound from "../../assets/img/no_data.jpg";
import "./NoFound.scss";

export default function NoFound({ error }) {
	return (
		<div className="NoFound">
			<img src={imgNoFound} alt="No found image" />
			{console.log(error)}
		</div>
	);
}
