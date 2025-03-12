import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Step {
	number: string;
	title: string;
	description: string;
	icon: string;
}

const steps: Step[] = [
	{
		number: '1',
		title: 'Free Consultation',
		description:
			'Expert advice on your project needs and budget considerations.',
		icon: '/icons/contact.svg',
	},
	{
		number: '2',
		title: 'On-Site Assessment',
		description:
			'Precise measurements and site evaluation for accurate project planning.',
		icon: '/icons/site-visit.svg',
	},
	{
		number: '3',
		title: 'Design Development',
		description:
			'Creating detailed plans and visualizations to bring your vision alive.',
		icon: '/icons/design.svg',
	},
	{
		number: '4',
		title: 'Permit Acquisition',
		description:
			'Navigating complex approval processes to ensure code-compliant construction.',
		icon: '/icons/permit.svg',
	},
	{
		number: '5',
		title: 'Construction Support',
		description:
			'Ongoing guidance and contractor coordination throughout the building process.',
		icon: '/icons/construction.svg',
	},
];

export default function Steps() {
	return (
		<section className="bg-background py-16 md:py-20">
			<div className="container mx-auto px-4">
				<div>
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
						Our Process
					</h2>
					<p className="text-center text-gray-600 text-lg mb-12">
						Our process is designed to be transparent and efficient, ensuring
						you get the best possible service.
					</p>
				</div>

				{/* Desktop view - horizontal line connecting steps */}

				<div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-4 lg:gap-x-8 mt-20">
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center md:items-start"
						>
							{/* Icon */}
							<div className="flex justify-center mb-4">
								<Image
									src={step.icon}
									alt={step.title}
									width={50}
									height={50}
									className="w-12 h-12"
								/>
							</div>

							{/* Content */}
							<div className="space-y-2 text-center md:text-left">
								<p className="text-gray-600 text-sm">{step.number}</p>
								<h3 className="text-lg font-bold">{step.title}</h3>
								<p className="text-gray-600 text-sm max-w-xs">
									{step.description}
								</p>
							</div>

							{/* Mobile view - vertical line connecting steps */}
							{index < steps.length - 1 && (
								<div className="md:hidden w-px h-12 bg-gray-200 my-4"></div>
							)}
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<Button
						asChild
						variant="default"
						size="lg"
						className="group rounded bg-button-background"
					>
						<Link href="/services">
							Let&apos;s Get Started
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
