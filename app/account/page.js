import { redirect } from 'next/navigation';

export default function Account() {
	// assume that profile info is null
	const userProfileInfo = null;

	if (userProfileInfo === null) {
		// redirect('cart?search=product1');
		redirect('products?search=product1');
		// redirect('profile');
	}
	return <h1>Account page.</h1>;
}
