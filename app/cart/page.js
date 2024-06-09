'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function Cart() {
	const pathName = usePathname();
	console.log(pathName);
	const searchParams = useSearchParams();
	console.log(searchParams, searchParams.get('search'));

	return (
		<div>
			<h1>This is a Cart Page</h1>
		</div>
	);
}
