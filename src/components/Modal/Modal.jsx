import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
	// Закриття по Escape
	const handleKeyDown = useCallback(
		(e) => {
			if (e.code === "Escape") {
				onClose();
			}
		},
		[onClose]
	);
	// Закриття по кліку на backdrop
	const handleBackdrop = (e) => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	};
	// Додаємо та прибираємо слухача подій
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return createPortal(
		<div className="Modal__backdrop" onClick={handleBackdrop}>
			<div className="Modal__content">{children}</div>
		</div>,
		modalRoot
	);
};
export default Modal;
