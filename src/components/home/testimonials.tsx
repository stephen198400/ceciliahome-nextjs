'use client';

import Image from 'next/image';
import { Card } from '../ui/card';

type TestimonialType = {
	content: string;
	rating: number;
	author: {
		name: string;
		city: string;
		company: string;
		batch?: string;
		image: string;
	};
};

const testimonials: TestimonialType[] = [
	{
		content:
			'Cecilia Home transformed our outdated kitchen into a modern masterpiece. Their attention to detail in the design and construction process was exceptional. The team was professional and completed the project ahead of schedule!',
		rating: 4.9,
		author: {
			name: 'Sarah Chen',
			city: 'San Francisco',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4',
		},
	},
	{
		content:
			'Working with Mason on our ADU project was a fantastic experience. Their expertise in navigating permits and designing a space that perfectly complemented our main house was invaluable. The final result exceeded our expectations!',
		rating: 5.0,
		author: {
			name: 'Michael Rodriguez',
			city: 'Palo Alto',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			'The Cecilia Home team helped us design and build a beautiful deck that completely transformed our outdoor living space. Their knowledge of local building codes and attention to structural integrity was impressive.',
		rating: 4.7,
		author: {
			name: 'Jennifer Park',
			city: 'San Jose',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
		},
	},
	{
		content:
			'After the wildfire damage, Cecilia Home was instrumental in rebuilding our home. Their team handled everything from structural assessment to final touches, making a difficult time much easier for our family.',
		rating: 4.8,
		author: {
			name: 'David Thompson',
			city: 'Mountain View',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f',
		},
	},
	{
		content:
			'The foundation repair work by Cecilia Home was thorough and professional. They explained every step of the process and completed the work with minimal disruption to our daily life. Highly recommend their expertise!',
		rating: 4.6,
		author: {
			name: 'Lisa Wong',
			city: 'Berkeley',
			company: 'Property Owner',
			image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b',
		},
	},
	{
		content:
			'Mason and the Cecilia Home team designed a perfect commercial space for our restaurant. Their understanding of both aesthetic appeal and functional requirements was exactly what we needed. Outstanding service!',
		rating: 4.9,
		author: {
			name: 'Robert Kim',
			city: 'Cupertino',
			company: 'Restaurant Owner',
			image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6',
		},
	},
];

const StarRating = ({ rating }: { rating: number }) => {
	// 将评分转换为整数和小数部分
	const fullStars = Math.floor(rating);
	const decimal = rating - fullStars;
	const stars = [];

	// 添加实心星星
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<span key={`full-${i}`} className="text-yellow-500">
				★
			</span>
		);
	}

	// 如果有小数，添加半星（大于0.3显示半星）
	if (decimal > 0.3) {
		stars.push(
			<span
				key="half"
				className="text-yellow-500"
				style={{ position: 'relative' }}
			>
				<span
					className="absolute inset-0"
					style={{ clipPath: `inset(0 ${(1 - decimal) * 100}% 0 0)` }}
				>
					★
				</span>
				<span className="text-gray-300">★</span>
			</span>
		);
	}

	// 添加剩余的空心星星
	const remainingStars = 5 - stars.length;
	for (let i = 0; i < remainingStars; i++) {
		stars.push(
			<span key={`empty-${i}`} className="text-gray-300">
				★
			</span>
		);
	}

	return <div className="flex items-center gap-0.5">{stars}</div>;
};

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
	return (
		<Card className="p-6 rounded-xl  cursor-pointer bg-[#FFFDF7] shadow-sm border border-gray-100 flex flex-col h-[280px] group transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 hover:bg-white">
			<div className="flex items-center justify-between mb-4">
				<StarRating rating={testimonial.rating} />
			</div>
			<p className="text-gray-700 text-base leading-relaxed line-clamp-4 flex-1 group-hover:text-gray-900">
				{testimonial.content}
			</p>
			<div className="flex items-center gap-3 pt-4 border-t border-gray-100">
				<div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-transparent group-hover:ring-yellow-400/20">
					<Image
						src={testimonial.author.image}
						alt={testimonial.author.name}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div>
					<p className="font-medium text-gray-900 group-hover:text-yellow-600">
						{testimonial.author.name}
					</p>
					<p className="text-sm text-gray-500">
						{testimonial.author.city}, CA
						{testimonial.author.batch && ` (${testimonial.author.batch})`}
					</p>
				</div>
			</div>
		</Card>
	);
};

export default function Testimonials() {
	const gridTestimonials = testimonials.slice(0, 6);

	return (
		<section className="py-20 overflow-hidden bg-background">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Loved By Homeowners</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied
						clients have to say about their experience working with us.
					</p>
					<div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#FFFDF7] rounded-full">
						<span className="text-yellow-500">★</span>
						<span className="font-semibold">4.8</span>
						<span className="text-gray-500">from 200+ founders</span>
					</div>
				</div>

				<div className="relative">
					{/* Static Grid for Large Screens */}
					<div className="hidden lg:block testimonials-mask">
						<div className="grid grid-cols-3 gap-6">
							{gridTestimonials.map((testimonial, i) => (
								<TestimonialCard key={`grid-${i}`} testimonial={testimonial} />
							))}
						</div>
					</div>

					{/* Scrolling Track for Mobile/Tablet */}
					<div className="lg:hidden relative testimonials-mask">
						<div className="relative flex gap-4 overflow-x-hidden">
							{/* First Track */}
							<div className="flex gap-4 animate-[scroll_25s_linear_infinite]">
								{testimonials.map((testimonial, i) => (
									<div key={i} className="w-[320px] sm:w-[340px] flex-shrink-0">
										<TestimonialCard testimonial={testimonial} />
									</div>
								))}
								{/* Duplicate items in the same track for seamless loop */}
								{testimonials.map((testimonial, i) => (
									<div
										key={`dup-${i}`}
										className="w-[320px] sm:w-[340px] flex-shrink-0"
									>
										<TestimonialCard testimonial={testimonial} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
