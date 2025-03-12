import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface Article {
	slug: string;
	title: string;
	excerpt: string;
	coverImage: string;
	date: string;
	category: 'News' | 'Perspectives' | 'Insights';
}

const articles: Article[] = [
	{
		slug: 'maximizing-space-with-adu-designs',
		title: 'Maximizing Space with Modern ADU Designs in California',
		excerpt:
			'Discover how accessory dwelling units can add value to your property while providing flexible living spaces.',
		coverImage:
			'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbiUyMGZyYW1pbmd8ZW58MHx8fHwxNzQxNzcxMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'Jan 15, 2024',
		category: 'Insights',
	},
	{
		slug: 'kitchen-bathroom-remodeling-trends',
		title: '2024 Kitchen and Bathroom Remodeling Trends for California Homes',
		excerpt:
			'Explore the latest design trends and innovative solutions for your next interior remodeling project.',
		coverImage:
			'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fHx8MTc0MTc3MTA0N3ww&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'Feb 22, 2024',
		category: 'Perspectives',
	},
	{
		slug: 'foundation-assessment-repair-guide',
		title: 'A Comprehensive Guide to Foundation Assessment and Repair',
		excerpt:
			'Learn about the importance of structural integrity and how our engineering solutions can protect your investment.',
		coverImage:
			'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBmb3VuZGF0aW9uJTIwcmVwYWlyfGVufDB8fHx8MTc0MTc3MTA1MHww&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'Mar 10, 2024',
		category: 'Insights',
	},
	{
		slug: 'navigating-permit-process-california',
		title: 'Navigating the Building Permit Process in Southern California',
		excerpt:
			'A step-by-step guide to understanding and successfully obtaining permits for your construction projects.',
		coverImage:
			'https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHBlcm1pdCUyMGFwcGxpY2F0aW9uJTIwcHJvY2Vzc3xlbnwwfHx8fDE3NDE3NzEwNTN8MA&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'Apr 5, 2024',
		category: 'Perspectives',
	},
	{
		slug: 'sustainable-new-construction-practices',
		title: 'Sustainable Practices in New Home Construction',
		excerpt:
			"How we're incorporating eco-friendly materials and energy-efficient designs in our new construction projects.",
		coverImage:
			'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBRFUlMjBhY2Nlc3NvcnklMjBkd2VsbGluZyUyMHVuaXQlMjBkZXNpZ258ZW58MHx8fHwxNzQxNzcxMDQzfDA&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'May 18, 2024',
		category: 'News',
	},
	{
		slug: 'commercial-design-restaurant-retail',
		title:
			'Innovative Commercial Design Solutions for Restaurants and Retail Spaces',
		excerpt:
			'Creating functional and attractive commercial environments that enhance customer experience and business efficiency.',
		coverImage:
			'https://images.unsplash.com/photo-1542733819-2b9351e80d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8fHx8MTc0MTc3MTA2Nnww&ixlib=rb-4.0.3&q=80&w=1080',
		date: 'Jun 7, 2024',
		category: 'News',
	},
];

export function Articles() {
	return (
		<section className="py-16 bg-[#FFFDF7]">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-12">Latest news</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{articles.map((article, index) => (
						<Link
							key={article.slug}
							href={`/articles/${article.slug}`}
							className={`group ${index > 2 ? 'hidden md:block' : ''}`}
						>
							<article className="space-y-4">
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={article.coverImage}
										alt={article.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									/>
									<Badge
										variant="secondary"
										className="absolute top-4 left-4 bg-white"
									>
										{article.category}
									</Badge>
								</div>
								<div className="space-y-2">
									<time className="text-sm text-gray-500">{article.date}</time>
									<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
										{article.title}
									</h3>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
