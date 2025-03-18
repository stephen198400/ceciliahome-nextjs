import Image from 'next/image';
import Link from 'next/link';

const companyLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'About', href: '/about' },
	{ title: 'Showcase', href: '/showcase' },
	{ title: 'Contact', href: '/contact' },
];

const serviceLinks = [
	{ title: 'ADU Design', href: '/services/adu-design' },
	{ title: 'Foundation Assessment', href: '/services/foundation' },
	{ title: 'Interior Remodeling', href: '/services/remodeling' },
	{ title: 'Commercial Design', href: '/services/commercial' },
	{ title: 'Wildfire Reconstruction', href: '/services/wildfire' },
];

const utilityLinks = [
	{ title: 'Terms & Conditions', href: '/terms' },
	{ title: 'Privacy Policy', href: '/privacy' },
	{ title: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
	return (
		<footer className="bg-[#FFFDF7] border-t border-gray-100 py-16">
			<div className="container mx-auto px-4 max-w-[1440px]">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
					{/* Company Info */}
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<Image
								src="/logo.svg"
								alt="Cecilia Home"
								width={32}
								height={32}
								className="w-8 h-8"
							/>
							<span className="text-xl font-bold text-gray-900">
								Cecilia Home
							</span>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Professional architectural and engineering services for your ideal
							living space. We specialize in ADU design, structural engineering,
							and comprehensive home renovation solutions.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
								rel="noopener noreferrer"
								target="_blank"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="w-5 h-5 text-gray-600"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
								</svg>
							</a>
							<a
								href="#"
								className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
								rel="noopener noreferrer"
								target="_blank"
							>
								<span className="sr-only">Instagram</span>
								<svg
									className="w-5 h-5 text-gray-600"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									></path>
								</svg>
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61560484010432"
								className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
								rel="noopener noreferrer"
								target="_blank"
							>
								<span className="sr-only">Facebook</span>
								<svg
									className="w-5 h-5 text-gray-600"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
								</svg>
							</a>
						</div>
					</div>

					{/* Company Links */}
					<div className="space-y-6">
						<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
							Company
						</h3>
						<ul className="space-y-4">
							{companyLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div className="space-y-6">
						<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
							Services
						</h3>
						<ul className="space-y-4">
							{serviceLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
							Contact
						</h3>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-gray-900">Email</p>
								<a
									href="mailto:contact@ceciliahome.design"
									className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
								>
									contact@ceciliahome.net
								</a>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-900">Phone</p>
								<a
									href="tel:+1-307-285-7290"
									className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
								>
									+1 (510) 909-1933
								</a>
							</div>
							<div>
								<p className="text-sm font-medium text-gray-900">Office</p>
								<p className="text-base text-gray-600">
									1816 Enclave Place
									<br />
									Concord, CA 94519
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-gray-500">
							© {new Date().getFullYear()} Cecilia Home. All rights reserved.
						</p>
						<div className="flex space-x-6">
							{utilityLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
