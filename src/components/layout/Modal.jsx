import ReactDOM from "react-dom";
import UserProfile from "../users/UserProfile";

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className='modal'>
			<UserProfile />
			<button className='close' onClick={onClose}>
				x
			</button>
		</div>,
		document.body,
	);
};

export default Modal;
