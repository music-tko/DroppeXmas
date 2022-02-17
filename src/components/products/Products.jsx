import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/actions/index";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);

	useEffect(() => {
		const getProducts = async () => {
			await axios.get("https://fakestoreapi.com/products").then((response) => {
				setData(response.data);
				setFilter(response.data);
				console.log(filter);
			});
		};

		getProducts();
	}, []);

	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addCart(product));
	};

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	return (
		<div className='prodct-page'>
			<div className='product-header'></div>
			<div className='category'>
				<h1>Latest Products</h1>
				<hr />
				<div className='buttons'>
					<button onClick={() => setFilter(data)}>All</button>
					<button onClick={() => filterProduct("men's clothing")}>
						Men's Clothing
					</button>
					<button onClick={() => filterProduct("women's clothing")}>
						Women's Clothing
					</button>
					<button onClick={() => filterProduct("jewelery")}>Jewelery</button>
					<button onClick={() => filterProduct("electronics")}>
						Electronics
					</button>
				</div>
			</div>
			<div className='products-grid'>
				{filter.map((product) => (
					<div key={product.id} className='product-card'>
						<Link to={`/products/${product.id}`}>
							<p className='product-title'>
								{product.title.substring(0, 20)}...
							</p>
							<p>${product.price}</p>
							<img src={product.image} alt={product.title} />
						</Link>
						<br />
						<br />
						<button onClick={() => addProduct(product)}>Add To Cart</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
