const NavBar = () => {
    return ( 
        <>
        <nav className="navBar">
            {/* <img src="" alt="" /> */}
            <p className="navLogo">Droppe Xmas</p>
            <ul className="navLinks">
                <li>Products</li>
                <li>WishLists</li>
                <li>Cart</li>
                <li><button className="authButtons">Register</button></li>
                <li><button className='authButtons'>Login</button></li>
            </ul>
        </nav>
        </>
     );
}
 
export default NavBar;