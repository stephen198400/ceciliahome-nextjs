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
		title: '24-HOUR EMERGENCY RESPONSE',
		description:
			'Our rapid response team is available 24/7 for immediate assessment and stabilization of wildfire-damaged properties throughout Southern California. We secure structures, prevent further damage, and begin the restoration process within hours of your call.',
	},
	{
		title: 'COMPREHENSIVE STRUCTURAL ASSESSMENT',
		description:
			'Our licensed structural engineers perform thorough evaluations of fire-damaged buildings to determine structural integrity and safety. We utilize advanced inspection techniques to identify hidden damage within framing, foundation, and load-bearing elements.',
	},
	{
		title: 'SMOKE & SOOT DAMAGE REMEDIATION',
		description:
			'We specialize in complete removal of smoke residue, soot, and odors from fire-affected properties. Our technicians use professional-grade equipment and specialized cleaning products to restore surfaces and eliminate persistent smoke damage throughout the structure.',
	},
	{
		title: 'CUSTOM REBUILDING DESIGN',
		description:
			'Our architects and designers work with you to reimagine and rebuild your fire-damaged home, incorporating modern safety features, energy efficiency, and your desired aesthetic improvements while maintaining the character of your original space.',
	},
	{
		title: 'INSURANCE CLAIM ASSISTANCE',
		description:
			'Navigate complex wildfire insurance claims with our expert guidance. We provide detailed documentation, damage assessments, scope of work estimates, and communicate directly with adjusters to ensure you receive the maximum coverage for your fire damage restoration.',
	},
	{
		title: 'COMPLETE RECONSTRUCTION SERVICES',
		description:
			'From minor repairs to complete rebuilds, our construction teams handle every aspect of restoring your fire-damaged property. We manage permits, coordinate with local authorities, and deliver quality craftsmanship to safely return you to a fully restored home.',
	},
];
/* --------------------------------------------- SEO -------------------------------------------- */
export const metadata = {
	title:
		'Southern California Wildfire Damage Restoration & Structural Rebuilding',
	description:
		'24-hour fire damage restoration services in Southern California. Expert structural assessment, repair, and complete rebuilding design for wildfire-affected homes. Free consultation.',
	keywords: [
		'fire damage restoration California',
		'wildfire structural assessment',
		'Southern California fire damage repair',
		'residential fire damage restoration California',
		'fire damage reconstruction services',
		'structural fire damage repair California',
		'24 hour fire damage restoration California',
		'house fire restoration timeline California',
		'fire damage assessment California',
		'smoke damage repair Southern California',
		'emergency fire restoration San Diego',
		'house fire repair Los Angeles',
		'fire damaged home rebuilding',
		'wildfire reconstruction design',
		'fire insurance claim assistance California',
		'commercial fire damage restoration California',
		'post-wildfire structural engineering',
	],

	// Open Graph 数据
	openGraph: {
		title:
			'Southern California Wildfire Damage Assessment & Rebuilding Experts',
		description:
			'Specialized in post-wildfire structural evaluation and rebuilding in Southern California. Our licensed engineers and architects provide comprehensive assessment, repair design, and reconstruction services.',
		images: [
			{
				url: 'https://www.ceciliahome.design/images/fire-damage-restoration.jpg',
				width: 1200,
				height: 630,
				alt: 'Southern California Fire Damage Restoration and Rebuilding',
			},
		],
		locale: 'en_US',
		type: 'website',
		siteName: 'Cecilia Home Design',
	},

	// Twitter Card 元数据
	twitter: {
		card: 'summary_large_image',
		title:
			'Expert Wildfire Damage Assessment & Restoration | Southern California',
		description:
			'From structural evaluation to complete home rebuilding after wildfires. Our Southern California team provides professional assessment, permits, and reconstruction services.',
		images: [
			'https://www.ceciliahome.design/images/fire-damage-restoration.jpg',
		],
	},

	alternates: {
		canonical:
			'https://www.ceciliahome.design/services/fire-damage-restoration',
	},
};

/* ---------------------------------------------- Projects --------------------------------------------- */
const serviceProjects: ServiceProject[] = [
	{
		slug: 'malibu-wildfire-home-restoration',
		title: 'Malibu Wildfire Home Restoration',
		description:
			'Complete restoration of a 3,800 sq ft Malibu residence severely damaged in the Woolsey Fire. Our team performed structural reinforcement, smoke damage remediation, and comprehensive rebuilding while incorporating advanced fire-resistant construction techniques and materials for future protection.',
		coverImage:
			'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxmaXJlJTIwZGFtYWdlJTIwcmVzdG9yYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzQyMzA0NTcwfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Malibu, CA',
		squareFeet: 3800,
		projectType: 'Wildfire Home Restoration',
	},
	{
		slug: 'san-diego-partial-fire-damage-repair',
		title: 'San Diego Partial Fire Damage Repair',
		description:
			'Structural rehabilitation and smoke damage remediation for a San Diego home with partial fire damage. Our engineers assessed compromised structural elements, designed targeted reinforcement solutions, and our construction team executed precise repairs while residents remained in the undamaged portion of the home.',
		coverImage:
			'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXIlMjBjb25zdHJ1Y3Rpb24lMjByZWJ1aWxkfGVufDB8fHx8MTc0MjMwNDU3M3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'San Diego, CA',
		squareFeet: 2200,
		projectType: 'Partial Fire Damage Repair',
	},
	{
		slug: 'ventura-county-wildfire-reconstruction',
		title: 'Ventura County Wildfire Reconstruction',
		description:
			'Complete reconstruction of a Ventura County home destroyed in the Thomas Fire. Starting from foundation evaluation and structural design, our team managed the entire rebuilding process, incorporating modern fire-resistant construction methods and creating a more energy-efficient home than the original structure.',
		coverImage:
			'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXIlMjBjb25zdHJ1Y3Rpb24lMjByZWJ1aWxkfGVufDB8fHx8MTc0MjMwNDU3M3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Ventura County, CA',
		squareFeet: 2800,
		projectType: 'Complete Wildfire Reconstruction',
	},
	{
		slug: 'santa-barbara-smoke-damage-restoration',
		title: 'Santa Barbara Smoke Damage Restoration',
		description:
			'Comprehensive smoke and soot damage remediation for a luxury Santa Barbara home affected by nearby wildfires. While the structure remained intact, extensive smoke infiltration required specialized cleaning of all surfaces, ductwork replacement, air quality remediation, and restoration of smoke-affected finishes throughout the property.',
		coverImage:
			'https://images.unsplash.com/photo-1496483353456-90997957cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZGFtYWdlJTIwcmVzdG9yYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzQyMzA0NTcwfDA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Santa Barbara, CA',
		squareFeet: 4200,
		projectType: 'Smoke Damage Restoration',
	},
	{
		slug: 'orange-county-commercial-fire-restoration',
		title: 'Orange County Commercial Fire Restoration',
		description:
			'Emergency restoration and rebuilding for a retail complex in Orange County damaged by an electrical fire. Our rapid response team secured the site, performed structural assessment, and developed a phased restoration plan that allowed portions of the complex to remain operational during reconstruction.',
		coverImage:
			'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXIlMjBjb25zdHJ1Y3Rpb24lMjByZWJ1aWxkfGVufDB8fHx8MTc0MjMwNDU3M3ww&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Orange County, CA',
		squareFeet: 8500,
		projectType: 'Commercial Fire Restoration',
	},
	{
		slug: 'los-angeles-historic-home-fire-restoration',
		title: 'Los Angeles Historic Home Fire Restoration',
		description:
			'Specialized restoration of a historic Los Angeles home damaged by fire. Our team carefully preserved original architectural elements while rebuilding damaged portions, reinforcing the structure to meet modern building codes, and incorporating discreet fire prevention systems to protect the historic property.',
		coverImage:
			'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHx3aWxkZmlyZSUyMGRhbWFnZSUyMGhvdXNlJTIwY2FsaWZvcm5pYXxlbnwwfHx8fDE3NDIzMDQ1NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
		location: 'Los Angeles, CA',
		squareFeet: 3200,
		projectType: 'Historic Home Fire Restoration',
	},
];
/* ------------------------------------------ question ------------------------------------------ */
const questions: QuestionType[] = [
	{
		id: 1,
		question: 'What should I do immediately after fire damage to my home?',
		answer:
			"Immediately after fire damage: 1) Contact your insurance company to report the damage and start the claim process, 2) Call our 24-hour emergency line for professional assessment and stabilization services, 3) Do not enter the structure until authorities confirm it's safe, 4) Document all visible damage with photos if it's safe to do so, 5) Secure temporary housing arrangements, 6) Avoid attempting DIY cleanup of smoke or fire damage, as improper methods can cause further damage or health risks. Our emergency response team can be on-site within hours to secure your property, prevent additional damage, and begin the restoration planning process.",
	},
	{
		id: 2,
		question:
			'How long does fire damage restoration typically take in Southern California?',
		answer:
			'Fire damage restoration timelines in Southern California vary significantly based on damage extent and scope of work. Minor smoke damage remediation typically takes 1-3 weeks. Moderate structural damage requiring partial rebuilding generally takes 2-4 months. Complete rebuilds following catastrophic wildfire damage usually require 8-14 months, including permitting processes which can be expedited in declared disaster areas. Additional factors affecting timeline include insurance claim processing, local building department workloads, and contractor availability following regional wildfire events when demand is high. We provide detailed timeline estimates after our initial structural assessment.',
	},
	{
		id: 3,
		question:
			'What is involved in the structural assessment after fire damage?',
		answer:
			'Our post-fire structural assessment includes: comprehensive evaluation of all load-bearing elements (foundation, walls, support beams, roof trusses) for fire and heat damage; moisture damage assessment from firefighting efforts; identification of compromised electrical, plumbing and mechanical systems; thermal imaging to detect hidden hot spots or damage within walls; analysis of concrete and masonry elements for heat-related deterioration; evaluation of structural connections for heat damage; and documentation of all findings with detailed reports and photographs. This assessment, conducted by licensed structural engineers, forms the foundation of our restoration plan and provides critical documentation for insurance claims.',
	},
	{
		id: 4,
		question:
			'Will my homeowners insurance cover fire damage restoration costs?',
		answer:
			'Most California homeowners insurance policies cover fire damage restoration, including wildfire damage. Standard coverage typically includes structural repairs, smoke damage remediation, temporary housing costs (Additional Living Expenses), and personal property replacement. However, coverage limits, deductibles, and specific terms vary by policy. In wildfire-prone areas, some policies may have special provisions or separate deductibles for wildfire events. Our insurance specialists work directly with your insurance company to maximize your coverage, properly document all damage, and ensure all eligible aspects of restoration are included in your claim. We provide detailed, insurance-compliant documentation and estimates to support your claim process.',
	},
	{
		id: 5,
		question: 'Can you incorporate fire-resistant features during rebuilding?',
		answer:
			"Yes, we specialize in incorporating advanced fire-resistant features during post-fire rebuilding. Our fire-hardening approach includes: using Class-A fire-rated roofing materials; installing ember-resistant vents and soffits; upgrading to multi-pane tempered glass windows; utilizing fire-resistant siding materials such as stucco, fiber cement, or treated wood; creating defensible space in landscape design; installing exterior sprinkler systems where appropriate; using fire-resistant insulation; and incorporating fire breaks within the structure. These features not only provide greater protection against future fires but may also qualify for insurance premium discounts and meet California's increasingly stringent building codes for wildfire-prone areas.",
	},
	{
		id: 6,
		question: 'How do you handle smoke odor and residue removal?',
		answer:
			'Our comprehensive smoke damage remediation process includes: HEPA air filtration to remove airborne smoke particles; specialized thermal fogging that penetrates all areas smoke has reached; ozone or hydroxyl treatments to chemically neutralize odor molecules; complete HVAC system cleaning and ductwork decontamination; detailed cleaning of all surfaces using appropriate techniques for each material type; encapsulation treatments for persistent odors in structural materials; removal and replacement of insulation which easily traps smoke odors; and professional cleaning of all soft goods including furniture, drapes, and clothing using specialized equipment. We also address hidden smoke residue in wall cavities, attics, and crawlspaces that are often overlooked but can cause persistent odors if not properly remediated.',
	},
];
/* ---------------------------------------- testimonials ---------------------------------------- */
const testimonials: TestimonialType[] = [
	{
		content:
			"After losing our Malibu home in the Woolsey Fire, Cecilia Home guided us through every step of rebuilding. Their structural engineers designed a beautiful new home incorporating fire-resistant features we hadn't considered. The construction team was exceptional, and they handled all permitting and insurance documentation. We now have a safer, more energy-efficient home than before.",
		rating: 5.0,
		author: {
			name: 'Emily Richardson',
			city: 'Malibu',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
		},
	},
	{
		content:
			"When our San Diego home suffered fire damage, we were devastated. Cecilia Home's emergency response team arrived within hours, securing our property and beginning the assessment process. Their clear explanation of necessary repairs and transparent timeline gave us confidence during a difficult time. Their skilled restoration preserved as much of our original home as possible while making critical improvements.",
		rating: 4.9,
		author: {
			name: 'Miguel Sanchez',
			city: 'San Diego',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
		},
	},
	{
		content:
			"Our commercial building in Orange County experienced significant fire damage from an electrical fault. Cecilia Home's quick response prevented further damage to inventory and their phased reconstruction approach allowed us to keep portions of our business operational during repairs. Their team coordinated seamlessly with our insurance provider, making the entire process remarkably smooth considering the circumstances.",
		rating: 4.8,
		author: {
			name: 'Jennifer Liu',
			city: 'Orange County',
			company: 'Business Owner',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
		},
	},
	{
		content:
			'After the Thomas Fire destroyed our Ventura home, Cecilia Home helped us see the rebuilding process as an opportunity rather than just a recovery. Their designers incorporated our wishlist features while their construction team ensured everything met enhanced fire safety standards. Their knowledge of post-wildfire permitting expedited the process significantly, getting us back home months earlier than expected.',
		rating: 5.0,
		author: {
			name: 'Robert Mendez',
			city: 'Ventura County',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
		},
	},
	{
		content:
			"The smoke damage to our Santa Barbara home from nearby wildfires seemed overwhelming until Cecilia Home's remediation team arrived. Their thorough cleaning process eliminated all traces of smoke odor that two previous companies couldn't resolve. Their attention to detail was impressive, addressing hidden areas like inside cabinets and HVAC systems where smoke residue was trapped.",
		rating: 4.7,
		author: {
			name: 'Amanda Torres',
			city: 'Santa Barbara',
			company: 'Homeowner',
			image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604',
		},
	},
	{
		content:
			'Restoring our historic Los Angeles home after fire damage required specialized expertise that Cecilia Home delivered. Their understanding of historic preservation alongside modern safety requirements was impressive. They salvaged original features wherever possible while discreetly incorporating necessary updates. The craftsmanship matched the original construction quality while providing much better fire protection.',
		rating: 5.0,
		author: {
			name: 'David Chen',
			city: 'Los Angeles',
			company: 'Historic Home Owner',
			image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
		},
	},
];

/* ---------------------------------------------- Page --------------------------------------------- */
export default function FireDamageRestorationPage() {
	return (
		<div>
			<Script {...getJsonLdScript('services-fire-damage')} />
			<ServiceHero
				smallText="SOUTHERN CALIFORNIA WILDFIRE RECOVERY SPECIALISTS"
				title="Expert Fire Damage Assessment & Restoration"
				description="24-hour emergency response for wildfire and residential fire damage throughout Southern California. Our structural engineers and construction teams provide comprehensive assessment, restoration, and complete rebuilding services."
				image="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHw0fHxmaXJlJTIwZGFtYWdlJTIwcmVzdG9yYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzQyMzA0NTcwfDA&ixlib=rb-4.0.3&q=80&w=1200&h=800"
			/>
			<States />

			<ServiceFeatures
				title="Comprehensive Fire Damage Restoration"
				description="From emergency stabilization to complete rebuilding, our Southern California team provides end-to-end fire damage restoration services. We specialize in structural assessment, smoke damage remediation, and rebuilding homes with enhanced fire-resistant features."
				features={Features}
				buttonText="Contact Our Emergency Team"
			/>
			<Steps />

			<ServiceShowcase
				title="Fire Restoration Projects"
				description="Explore our portfolio of fire damage restoration and rebuilding projects throughout Southern California. Each case demonstrates our expertise in structural assessment, smoke damage remediation, and quality reconstruction."
				buttonText="Schedule Your Assessment"
				serviceProjects={serviceProjects}
			/>
			<ServiceFAQ
				title="Fire Damage Restoration FAQs"
				description="Answers to common questions about wildfire damage restoration, smoke remediation, insurance claims, and rebuilding timelines in Southern California."
				questions={questions}
			/>
			<ServiceTestimonials testimonials={testimonials} />
			<Trust />
		</div>
	);
}
