import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const LandingPage = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='land-page'>
			<div className='land-board'>
				<h1>Ho! Ho! Ho!</h1>
				<h3>Santa's helpers said you needed our help.</h3>
				<h4>Which One Are You?</h4>
				<button className='button' onClick={() => setOpen(true)}>
					Child
				</button>
				<Link to='parent-cart'>
					<button>Parent</button>
				</Link>
			</div>
			<div>
				<Modal isOpen={open} onClose={() => setOpen(false)} />
			</div>
		</div>
	);
};

export default LandingPage;
