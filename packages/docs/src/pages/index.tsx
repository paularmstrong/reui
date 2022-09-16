import * as React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<div>
			<div className="text-primary-500">reUI</div>
			<Link href="/component/textfield">TextField</Link>
		</div>
	);
};

export default HomePage;
