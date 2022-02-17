import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/actions/index";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addCart(product));
	};

	useEffect(() => {
		const getProduct = async () => {
			await axios
				.get("https://fakestoreapi.com/products/" + id)
				.then((response) => {
					setProduct(response.data);
				});
		};

		getProduct();
	}, [id]);

	return (
		<div className='product-details'>
			<div className='prod-description'>
				<h1>{product.title}</h1>
				<br />
				<h4>${product.price}</h4>
				{/* <p>
					{product.rating.rate} {product.rating.count}
				</p> */}
				<br />
				<hr />
				<br />
				<div>
					<p>{product.description}</p>
				</div>
				<div className='addProduct'>
					{/* <p>+_</p> */}
					<button onClick={() => addProduct(product)}>Add To Cart</button>
				</div>
			</div>
			<img src={product.image} alt={product.title} />
		</div>
	);
};

export default Product;
