'use client';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default ({ params }) => {
	console.log(params);

	const { isLoading, data, error } = useSWR(`https://dummyjson.com/users/${params.details}`, fetcher);
	console.log('data : ', data);

	if (error) {
		return <div>에러 발생!</div>;
	}

	if (isLoading) {
		return <h3 className="font-extrabold text-3xl">Loading Users...</h3>;
	}

	return (
		<div className="mt-4 p-5">
			<h1>client : user info</h1>
			<p>{data.id}</p>
			<p>{data.age}</p>
			<p>{data.email}</p>
			<p>{data.firstName}</p>
			<p>{data.lastname}</p>
			<p>{data.middleName}</p>
		</div>
	);
};
