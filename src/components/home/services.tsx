import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		title: 'ADU Design',
		description:
			'Custom Accessory Dwelling Unit designs that maximize your property value while maintaining aesthetic harmony.',
		image:
			'https://images.unsplash.com/photo-1504297050568-910d24c426d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/adu-design',
	},
	{
		title: 'Foundation Assessment',
		description:
			"Comprehensive evaluation and repair solutions ensuring your property's structural integrity.",
		image:
			'https://images.unsplash.com/photo-1525896544042-354764aa27e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/foundation',
	},
	{
		title: 'Interior Remodeling',
		description:
			'Transform your living spaces with our comprehensive interior renovation services.',
		image:
			'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/remodeling',
	},
	{
		title: 'Commercial Design',
		description:
			'Create inspiring commercial spaces that enhance productivity and reflect your brand identity.',
		image:
			'https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/commercial',
	},
	{
		title: 'Wildfire Reconstruction',
		description:
			'Specialized reconstruction services incorporating resilient design principles.',
		image:
			'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/wildfire',
	},
	{
		title: 'Permit Services',
		description:
			'Expert assistance with building permits and regulatory compliance for your projects.',
		image:
			'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG9mZmljZXxlbnwwfHx8fDE3NDE3NjYxMTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
		href: '/services/permits',
	},
];

export default function ServiceB() {
	return (
		<section className="py-24 bg-[#FFFDF7] ">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<h2 className="text-4xl md:text-5xl font-bold">
						Our range of services
					</h2>
					<p className="text-gray-600 text-lg">
						Comprehensive design and construction solutions for residential and
						commercial projects, delivered with expertise and attention to
						detail.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{features.map((feature) => (
						<Link
							key={feature.title}
							href={feature.href}
							className="group space-y-4 block"
						>
							<div className="relative h-80 overflow-hidden rounded-2xl">
								<Image
									src={feature.image}
									alt={feature.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
							<div>
								<h3 className="text-2xl font-bold group-hover:text-button-background transition-colors duration-200">
									{feature.title}
								</h3>
								<p className="mt-2 text-gray-600 line-clamp-2">
									{feature.description}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-16 text-center">
					<Button
						asChild
						variant="default"
						size="lg"
						className="group rounded bg-button-background py-6 text-md"
					>
						<Link href="/showcase">
							View All Services
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
