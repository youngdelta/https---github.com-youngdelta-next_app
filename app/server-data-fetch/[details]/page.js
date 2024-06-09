async function fetchUserDetails(currentUserId) {
	try {
		const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
		const result = await apiResponse.json();
		return result;
	} catch (error) {
		throw new Error(error);
	}
}
export default async function UserDetails({ params }) {
	console.log(params);
	const user = await fetchUserDetails(params.details);
	console.log('user : ', user);
	const { firstName, lastLame, age, email, phone } = user;

	return (
		<div className="p-5 mt-5">
			<h1>user Info Detail</h1>
			{user.id}
			<p>{firstName}</p>
			<p>{lastLame}</p>
			<p>{age}</p>
			<p>{email}</p>
			<p>{phone}</p>
		</div>
	);
}
