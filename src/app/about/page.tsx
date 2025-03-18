import AboutStates from '@/components/about/states';
import TeamsSection from '@/components/about/teams';
import { Features } from '@/components/common/features';
import { Trust } from '@/components/common/trust';

import Testimonials from '@/components/home/testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Us | Cecilia Home',
	description:
		'Learn about Cecilia Home, our mission, values, and our team of design and engineering professionals.',
};

export default function AboutPage() {
	return (
		<main className="">
			<TeamsSection />
			<AboutStates />
			<Features />
			<Testimonials />
			<Trust />
		</main>
	);
}
