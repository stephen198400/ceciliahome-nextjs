import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.ceciliahome.design',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://www.ceciliahome.design/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.ceciliahome.design/showcase',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: 'https://www.ceciliahome.design/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/adus',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		// 服务页面
		{
			url: 'https://www.ceciliahome.design/services/foundation-assessment',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/interior-remodeling',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/load-bearing-wall',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/accessory-structure',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/permit-application',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/new-construction',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/house-demolition',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/commercial-design',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://www.ceciliahome.design/services/wildfire-damage',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	];
}
