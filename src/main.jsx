import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/base.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
