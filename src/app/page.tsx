import { Articles } from '@/components/home/articles';
import FAQ from '@/components/home/faq';
import { Features } from '@/components/home/features';

import { Hero } from '@/components/home/hero';
import Service from '@/components/home/services';

import { States } from '@/components/home/states';
import Steps from '@/components/home/steps';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
	return (
		<div className="w-full ">
			<Hero />
			<States />
			<Features />
			<Service />
			<Steps />
			<Testimonials />
			<FAQ />
			<Articles />
		</div>
	);
}
