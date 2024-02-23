import React, { useEffect, useState } from "react";
import { getUserList } from "../utils/service";
import { Layout, Table } from "../components";

const User: React.FC = () => {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		fetchUserList();
	}, []);

	async function fetchUserList() {
		try {
			const response = await getUserList();
			setUserList(response?.data);
			console.log("User List:", response);
		} catch (error: any) {
			console.error("Error fetching user list:", error.message);
		}
	}

	return (
		<>
			<Layout>
				<Table data={userList} />
			</Layout>
		</>
	);
};

export default User;
