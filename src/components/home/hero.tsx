import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

// 获取图片资源
const heroImage =
	'https://images.unsplash.com/photo-1631215320889-7cf5eb3224f8?auto=format&fit=crop&q=80&w=1200&h=800';

export function Hero() {
	return (
		<section className="min-h-[66.67vh] flex items-center overflow-hidden bg-[#EFEBE8]">
			<div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
				<div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
					{/* Left Content */}
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center md:pr-4 lg:pr-8">
						<p className="text-gray-500 font-semibold text-sm sm:text-base">
							CALIFORNIA LICENSED ENGINEERING & DESIGN
						</p>
						<h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug lg:leading-tight mt-3 sm:mt-4">
							Your Local Design & Engineering Experts
						</h1>
						<p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-500 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed">
							Transform your space with our professional architectural and
							structural engineering services. We handle permits, plans, and
							design while you watch your vision become reality.
						</p>
						<div className="mt-6">
							<Link href="/contact">
								<Button
									className="px-6 rounded py-6 	bg-button-background  font-medium"
									size="lg"
								>
									Get A Free Consultation
								</Button>
							</Link>
						</div>
					</div>

					{/* Right Image */}
					<div className="w-full md:w-1/2 flex items-center justify-center">
						<div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-xl">
							<Image
								src={heroImage}
								alt="Professional Home Design"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
