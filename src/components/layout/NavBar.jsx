import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className='navBar'>
				{/* <img src="" alt="" /> */}
				<p className='navLogo'>
					<Link to='north-pole'>Droppe Xmas</Link>
				</p>
				<ul className='navLinks'>
					<li>
						<Link to='products'>Products</Link>
					</li>
					<li>
						<Link to='/parent-cart'>
							<button className='authButtons'>Cart</button>
						</Link>
					</li>
					<li>
						<Link to='#'>
							<button className='authButtons'>Register</button>
						</Link>
					</li>
					<li>
						<Link to='#'>
							<button className='authButtons'>Login</button>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
