import { Features } from '@/components/common/features';
import { Articles } from '@/components/home/articles';
import FAQ from '@/components/home/faq';

import { Hero } from '@/components/home/hero';
import Service from '@/components/home/services';

import { States } from '@/components/common/states';
import Steps from '@/components/common/steps';
import Testimonials from '@/components/home/testimonials';

export const metadata = {
	title: 'California Architectural & Structural Design | Permit Services',
	description:
		'Expert architectural design and permit services in California. Specializing in ADUs, home additions, remodeling, and structural engineering for residential and commercial projects. Free consultation.',
	keywords: [
		'california architectural design',
		'ADU Design California',
		'interior remodeling California',
		'remove load-bearing wall California',
		'home addition California',
		'retaining wall design California',
		'new residential construction California',
		'Structural inspection California',
		'building permit services California',
		'fire damage restoration California',
	],

	// Open Graph 数据 - 优化社交媒体分享
	openGraph: {
		title: 'Premium Architectural Design Services in California',
		description:
			'Transform your vision into reality with our expert architectural design services. From custom homes to commercial spaces across California.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/homepage-showcase.jpg',
				width: 1200,
				height: 630,
				alt: 'California Architectural Design Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title: 'Premium Architectural Design Services in California',
		description:
			'Expert architectural and structural design services in California.',
		images: ['https://www.cecilia123.com/images/homepage-showcase.jpg'],
	},

	// 其他有用的元数据
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
		nocache: true,
	},

	alternates: {
		canonical: 'https://www.cecilia123.com',
	},

	// 添加区域和语言信息
	// metadataBase: new URL('https://www.cecilia123.com'),
	// verification: {
	// 	google: 'your-google-verification-code',
	// },
};

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
