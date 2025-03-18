import { Features } from '@/components/common/features';
import { Articles } from '@/components/home/articles';
import FAQ from '@/components/home/faq';

import { Hero } from '@/components/home/hero';
import Service from '@/components/home/services';

import { States } from '@/components/common/states';
import Steps from '@/components/common/steps';
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
