import ECommerce from '@/components/Dashboard/E-commerce';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard Admin',
	description: 'An example of Terraform, Ansible and Nextjs working together',
	// other metadata
};

export default function Home() {
	return (
		<>
			<ECommerce />
		</>
	);
}
