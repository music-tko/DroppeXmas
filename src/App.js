import "./sass/App.scss";
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home";
import LandingPage from "./components/layout/Landing";
import Product from "./components/products/Product";
import Products from "./components/products/Products";
import MainCart from "./components/cart/MainCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/north-pole' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/products/:id' element={<Product />} />
					<Route path='/parent-cart' element={<MainCart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
