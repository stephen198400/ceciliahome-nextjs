import { Trust } from '@/components/common/trust';
import ProjectFilter from '@/components/showcase/ProjectFilter';
import { projects, projectTypes } from '@/data/projects';

// SEO Metadata
export const metadata = {
	title: 'Project Showcases | Cecilia Home',
	description:
		'Explore our portfolio of successful design and engineering projects throughout California, from ADU designs to home renovations.',
	keywords:
		'architecture showcases, engineering projects, ADU design, home remodeling, California construction projects',
};

export default function ShowcasesPage() {
	return (
		<div>
			<section className="min-h-screen bg-background">
				<div className="container mx-auto px-4 py-16 md:py-24">
					<div className="mb-12">
						<h1 className="text-5xl md:text-6xl font-bold mb-4">
							Project Showcases
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl">
							Design and Engineering Services Throughout California
						</p>
					</div>

					{/* Client-side project filter component */}
					<ProjectFilter projectTypes={projectTypes} projects={projects} />
				</div>
			</section>
			<Trust />
		</div>
	);
}
