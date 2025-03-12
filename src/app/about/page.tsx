import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Us | Cecilia Home',
	description:
		'Learn about Cecilia Home, our mission, values, and our team of design and engineering professionals.',
};

export default function AboutPage() {
	return (
		<main className="py-16">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl md:text-5xl font-bold mb-8">
					About Cecilia Home
				</h1>
				<p className="text-lg mb-8">
					At Cecilia Home, we provide comprehensive design and engineering
					solutions for residential and commercial projects throughout
					California.
				</p>
				<p className="text-lg mb-8">
					Our team of experienced architects, engineers, and designers is
					dedicated to bringing your vision to life with attention to detail,
					quality craftsmanship, and innovative solutions.
				</p>
				<p className="text-lg">
					Whether you need ADU design, interior remodeling, structural
					solutions, or commercial design services, we have the expertise to
					deliver exceptional results.
				</p>
			</div>
		</main>
	);
}
