// import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			await axios
				.get("https://fakestoreapi.com/users?limit=5")
				.then((response) => {
					setUsers(response.data);
					console.log(response.data);
				});
		};

		getUsers();
	}, []);

	return (
		<>
			<h1>User Profile </h1>
			<div className='users'>
				{users.map((user) => (
					<div key={user.id}>
						<button className='user-button'>{user.name.firstname}</button>
						<p>{user.id}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UserProfile;
