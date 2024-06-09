import Link from 'next/link';

async function fetchListOfUsers() {
	try {
		const apiResponse = await fetch('https://dummyjson.com/users', { cache: 'no-store' });
		const result = await apiResponse.json();
		return result.users;
	} catch (error) {
		throw new Error(error);
	}
}

export default async function ServerSideDataFetching(params) {
	const listOfUsers = await fetchListOfUsers();
	console.log(listOfUsers);

	return (
		<div className="p-10">
			<h1>Server Side Data Fetcing : User List Page</h1>
			{/* <ul>{listOfUsers && listOfUsers.length > 0 ? listOfUsers.map((user) => <li className="mt-5 cursor-pointer">{user.firstName}</li>) : null}</ul> */}
			<ul>
				{listOfUsers && listOfUsers.length > 0
					? listOfUsers.map((user) => (
							<li className="mt-5 cursor-pointer">
								<Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}
