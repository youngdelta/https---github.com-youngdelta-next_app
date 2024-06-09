'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching(params) {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);

	const { isLoading, data, error } = useSWR('https://dummyjson.com/users', fetcher);

	if (error) {
		return <div>에러 발생!</div>;
	}

	if (isLoading) {
		return <h3 className="font-extrabold text-3xl">Loading Users...</h3>;
	}

	async function fetchListOfUsers() {
		try {
			setLoading(true);
			const apiResponse = await fetch(`https://dummyjson.com/users`);
			const result = await apiResponse.json();

			if (result?.users) {
				setUsers(result.users);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setUsers([]);
			setLoading(false);
			// throw new Error(error);
		}
	}

	/* 
	useEffect(() => {
		fetchListOfUsers();
	}, []);
 */
	if (loading) {
		return <h3 className="font-extrabold text-3xl">Loading Users...</h3>;
	}

	return (
		<div className="p-5 mt-5">
			<h1 className="font-extrabold text-3xl">Client Side Data Fetcing</h1>
			<ul>
				{/* {users && users.length > 0
					? users.map((user) => (
							<li className="mt-5 cursor-pointer">
								<Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
							</li>
					  ))
					: null}
					 */}
				{data && data?.users && data?.users.length > 0
					? data?.users.map((user) => (
							<li className="mt-5 cursor-pointer">
								<Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}
