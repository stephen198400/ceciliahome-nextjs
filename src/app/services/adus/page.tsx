import { States } from '@/components/common/states';
import Steps from '@/components/common/steps';
import { Trust } from '@/components/common/trust';
import { ServiceFeatures } from '@/components/services/service-features';
import ServiceFAQ, { QuestionType } from '@/components/services/service-fqa';
import { ServiceHero } from '@/components/services/service-hero';
import {
	ServiceProject,
	ServiceShowcase,
} from '@/components/services/service-showcase';
import ServiceTestimonials, {
	TestimonialType,
} from '@/components/services/service-testimonials';
import { getJsonLdScript } from '@/data/json-ld';
import Script from 'next/script';

/* ---------------------------------------------- Features --------------------------------------------- */
const Features = [
	{
		title: 'MAXIMIZE PROPERTY VALUE',
		description:
			"Adding an ADU can significantly increase your property value in California's competitive real estate market. Invest in your future with a smart, value-added home improvement.",
	},
	{
		title: 'GENERATE RENTAL INCOME',
		description:
			'Turn your backyard into a revenue source. An ADU provides an excellent opportunity to earn consistent rental income in high-demand California locations.',
	},
	{
		title: 'EXPAND LIVING SPACE',
		description:
			'Need more room for family, guests, or a home office? An ADU offers flexible space solutions to adapt to your evolving needs without moving.',
	},
	{
		title: 'STREAMLINED PERMIT PROCESS',
		description:
			'Navigating California ADU permits can be complex. We simplify the process, leveraging our expertise to ensure a smooth and efficient approval.',
	},
	{
		title: 'CUSTOMIZED DESIGN',
		description:
			'Your ADU should reflect your style and needs. We offer personalized design services to create an ADU that perfectly complements your property and lifestyle.',
	},
	{
		title: 'EXPERT LOCAL GUIDANCE',
		description:
			'Benefit from our deep understanding of California ADU regulations and construction practices. We ensure your project is compliant and successful from start to finish.',
	},
];
/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'modern-backyard-adu-san-francisco',
		title: 'Modern Backyard ADU in San Francisco',
		description:
			'A contemporary 650 sq ft detached ADU with high ceilings, abundant natural light, and a space-efficient open floor plan.',
		coverImage:
			'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbiUyMGZyYW1pbmd8ZW58MHx8fHwxNzQxNzcxMDYyfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Francisco, CA',
		squareFeet: 650,
		projectType: 'Detached ADU',
	},
	{
		slug: 'garage-conversion-adu-los-angeles',
		title: 'Stylish Garage Conversion ADU in Los Angeles',
		description:
			'A 480 sq ft garage conversion transformed into a modern living space with custom storage solutions and high-end finishes.',
		coverImage:
			'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBRFUlMjBhY2Nlc3NvcnklMjBkd2VsbGluZyUyMHVuaXQlMjBkZXNpZ258ZW58MHx8fHwxNzQxNzcxMDQzfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 480,
		projectType: 'Garage Conversion',
	},
	{
		slug: 'attached-adu-san-diego',
		title: 'Seamless Attached ADU in San Diego',
		description:
			'An 800 sq ft attached ADU featuring a private entrance, one bedroom, and an expansive living area with indoor-outdoor flow.',
		coverImage:
			'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBmb3VuZGF0aW9uJTIwcmVwYWlyfGVufDB8fHx8MTc0MTc3MTA1MHww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 800,
		projectType: 'Attached ADU',
	},
	{
		slug: 'junior-adu-oakland',
		title: 'Compact Junior ADU in Oakland',
		description:
			'A 400 sq ft junior ADU within the main house footprint, featuring efficient design and multi-functional furniture.',
		coverImage:
			'https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHBlcm1pdCUyMGFwcGxpY2F0aW9uJTIwcHJvY2Vzc3xlbnwwfHx8fDE3NDE3NzEwNTN8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Oakland, CA',
		squareFeet: 400,
		projectType: 'Junior ADU',
	},
	{
		slug: 'luxury-detached-adu-palo-alto',
		title: 'Luxury Detached ADU in Palo Alto',
		description:
			'A high-end 750 sq ft detached ADU with premium fixtures, smart home technology, and sustainable building materials.',
		coverImage:
			'https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVtb2RlbGluZyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fHx8MTc0MTc3MTA0N3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Palo Alto, CA',
		squareFeet: 750,
		projectType: 'Detached ADU',
	},
	{
		slug: 'mid-century-adu-sacramento',
		title: 'Mid-Century Modern ADU in Sacramento',
		description:
			'A 600 sq ft detached ADU inspired by mid-century design with clean lines, large windows, and indoor-outdoor living spaces.',
		coverImage:
			'https://images.unsplash.com/photo-1542733819-2b9351e80d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8fHx8MTc0MTc3MTA2Nnww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Sacramento, CA',
		squareFeet: 600,
		projectType: 'Detached ADU',
	},
];
/* ------------------------------------------ SEO ------------------------------------------ */
export const metadata = {
	title: 'ADU Design & Permits California | Accessory Dwelling Unit Plans',
	description:
		'Expert California ADU design services with pre-approved plans, permit assistance, and construction guidance. Learn how to build an ADU and maximize property value in California.',
	keywords: [
		'ADU California',
		'accessory dwelling unit California',
		'ADU plans California',
		'ADU design California',
		'pre-approved ADU plans California',
		'ADU floor plans California',
		'ADU builders California',
		'ADU permit California',
		'cost to build ADU California',
		'ADU regulations California',
		'how to build an ADU in California',
		'cost of ADU design in California',
		'luxury ADU design Los Angeles',
		'ADU construction California',
	],

	// Open Graph 数据 - 优化社交媒体分享
	openGraph: {
		title: 'California ADU Design & Plans | Accessory Dwelling Units Experts',
		description:
			'Complete ADU solutions from planning to permits. Get custom designs, pre-approved plans, and expert guidance on California accessory dwelling units. Free consultation on costs and regulations.',
		images: [
			{
				url: 'https://www.cecilia123.com/images/adu-showcase.jpg',
				width: 1200,
				height: 630,
				alt: 'Custom ADU Designs in California',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title: 'California ADU Design & Floor Plans | Permit Experts',
		description:
			'Find out how to build an ADU in California with our expert design and permit services. Pre-approved plans, regulations assistance, and cost guidance available.',
		images: ['https://www.cecilia123.com/images/adu-showcase.jpg'],
	},

	alternates: {
		canonical: 'https://www.cecilia123.com/services/adu',
	},
};
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What is an Accessory Dwelling Unit (ADU)?',
		answer:
			'An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It has its own kitchen, bathroom, and sleeping area, and can be attached to or detached from the main house. ADUs are also known as granny flats, in-law suites, or backyard cottages.',
	},
	{
		id: 2,
		question: 'Why should I consider building an ADU?',
		answer:
			'Building an ADU can increase your property value, generate rental income, provide housing for family members, or offer flexible living space. It&apos;s a smart investment in California&apos;s competitive housing market.',
	},
	{
		id: 3,
		question: 'What are the typical costs of designing and building an ADU?',
		answer:
			'ADU costs vary widely depending on size, complexity, finishes, and location. Design and permit fees can range from $5,000 to $15,000+, and construction costs can range from $100,000 to $300,000+. We provide detailed cost breakdowns and transparent pricing during our consultation.',
	},
	{
		id: 4,
		question: 'How long does it take to design and build an ADU?',
		answer:
			'The timeline for an ADU project depends on design complexity, permit processing times, and construction duration. Design and permitting can take 2-6 months, and construction can take 4-9 months. We provide estimated timelines during the planning phase and keep you updated throughout the project.',
	},
	{
		id: 5,
		question: 'What permits are required for ADU construction in California?',
		answer:
			'ADU construction requires building permits, and may also involve planning, zoning, and utility permits depending on local regulations. We handle the entire permit application process, ensuring compliance and a smooth approval.',
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
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

/* ---------------------------------------------- Page --------------------------------------------- */
export default function ADUsPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-adus')} />
			<ServiceHero
				smallText="CALIFORNIA ADU DESIGN & ENGINEERING"
				title="Your Trusted ADU Design Experts"
				description="Expand your living space with our specialized ADU design and
							engineering services in California. We manage permits, plans, and
							construction to bring your ADU vision to life."
				image="https://images.unsplash.com/photo-1631215320889-7cf5eb3224f8?auto=format&fit=crop&q=80&w=1200&h=800"
			/>
			<States />

			<ServiceFeatures
				title="Why You Need an ADU"
				description="Unlock the potential of your California property with a
				custom-designed Accessory Dwelling Unit (ADU). Cecilia Home provides
				expert ADU design and engineering services, making it easier than
				ever to expand your living space or generate rental income."
				features={Features}
				buttonText="Get Your ADU Solution"
			/>
			<Steps />

			<ServiceShowcase
				title="Featured ADU Projects"
				description="Explore our recently completed ADU projects throughout California. Each design showcases our dedication to quality, functionality, and aesthetic excellence."
				buttonText="Get A Free ADU Template"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Frequently Asked Questions"
				description="Answers to common questions about ADUs, design, permits, and more."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
