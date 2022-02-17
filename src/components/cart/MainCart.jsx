import UsersCart from "../users/UserCart";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MainCart = () => {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const getCart = async () => {
			await axios
				.get("https://fakestoreapi.com/carts?limit=5")
				.then((response) => {
					setCarts(response.data);
				});
		};

		getCart();
	}, []);

	return (
		<>
			<h1>Main Cart</h1>
			{carts.map((cart) => (
				<div key={cart.userId}>
					<p>Child {cart.id}</p>
					<p>{cart.date}</p>
					<p>{cart.products.quantity}</p>
				</div>
			))}
			<UsersCart />
		</>
	);
};

export default MainCart;

// export let store = (set, get) => ({
//   carts: [],
//   setCarts: (cartsData) => {
//     set((state) => ({ carts: cartsData }));
//   },
//   allocateCarts: () => {
//     const carts = get().carts;
//     const children = get().children;

//     children.forEach((child) => {
//       let products = carts[child.id - 1].products.map((p) => ({
//         ...p,
//         quantity: 1,
//         price: 9,
//       }));

//       let wishlist = products;
//       child.wishlist = wishlist;
//     });

//     set((state) => ({ children: children }));
//   },
//   children: [
//     {
//       name: "Monica",
//       id: 1,
//       wishlist: [],
//       approvedList: [],
//       discardedList: [],
//     },
//     {
//       name: "Rachel",
//       id: 2,
//       wishlist: [],
//       approvedList: [],
//       discardedList: [],
//     },
//     { name: "Joey", id: 3, wishlist: [], approvedList: [], discardedList: [] },
//     {
//       name: "Chandler",
//       id: 4,
//       wishlist: [],
//       approvedList: [],
//       discardedList: [],
//     },
//     { name: "Ross", id: 5, wishlist: [], approvedList: [], discardedList: [] },
//   ],
