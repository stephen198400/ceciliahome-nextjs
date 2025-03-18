'use client';

import Image from 'next/image';

// Team member data type
type TeamMember = {
	id: string;
	name: string;
	title: string;
	image: string;
	description?: string[];
	isPrimary?: boolean;
};

// All team members data including Mason
const teamMembers: TeamMember[] = [
	{
		id: 'mason',
		name: 'Mason Zheng',
		title: 'CEO & Chief Engineer',
		description: [
			'Cecilia Home&apos;s chief engineer and Architecture designer, Mason Zheng, started working as a civil engineer in 2000. In 2006, he got a Professional Engineer license in California with the vision to make home modifications easy and affordable.',
			'Over the last 20 years, he has completed numerous civil projects, including houses, communication lines, roads, bridges, and more, with a specialization in property addition design. With this extensive experience, Mason founded Cecilia Home in 2016 and has since achieved outstanding results in the housing field throughout the Bay Area.',
		],
		image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
		isPrimary: true,
	},
	{
		id: 'member-a',
		name: 'Sarah Chen',
		title: 'Lead Architect',
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
	},
	{
		id: 'member-b',
		name: 'David Wang',
		title: 'Project Manager',
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
	},
	{
		id: 'member-c',
		name: 'Emily Tan',
		title: 'Interior Designer',
		image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
	},
	{
		id: 'member-d',
		name: 'Michael Zhang',
		title: 'Structural Engineer',
		image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
	},
	{
		id: 'member-e',
		name: 'Jessica Liu',
		title: 'Client Relations Manager',
		image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
	},
	{
		id: 'member-f',
		name: 'Robert Chen',
		title: 'Construction Manager',
		image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
	},
	{
		id: 'member-g',
		name: 'Linda Huang',
		title: 'Permit Specialist',
		image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
	},
	{
		id: 'member-h',
		name: 'Tony Park',
		title: 'CAD Designer',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
	},
];

// Team member card component
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
	return (
		<div className="flex flex-col items-center group">
			<div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md">
				<Image
					src={member.image}
					alt={`${member.name} - ${member.title}`}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
				/>
				{/* Overlay with name and title */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
					<h3 className="text-xl font-semibold text-white">{member.name}</h3>
					<p className="text-gray-200 text-sm">{member.title}</p>
				</div>
			</div>
		</div>
	);
};

const TeamsSection = () => {
	// Separate Mason (primary member) from other team members
	const primaryMember = teamMembers.find((member) => member.isPrimary);
	const otherMembers = teamMembers.filter((member) => !member.isPrimary);

	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="container mx-auto px-4 md:px-8 lg:px-10">
				{/* <div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Meet the dedicated professionals behind Cecilia Home&apos;s
						architectural and engineering excellence. Our team combines
						expertise, creativity, and passion to bring your vision to life.
					</p>
				</div> */}

				{/* Featured Team Member - Mason */}
				{primaryMember && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16  rounded-xl ">
						{/* Photo - Half width on desktop */}
						<div className="relative">
							<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
								<Image
									src={primaryMember.image}
									alt={`${primaryMember.name} - ${primaryMember.title}`}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
								{/* Overlay with name and title */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
									<h3 className="text-2xl font-semibold text-white">
										{primaryMember.name}
									</h3>
									<p className="text-gray-200">{primaryMember.title}</p>
								</div>
							</div>
						</div>

						{/* Introduction */}
						<div className=" space-y-5">
							<div className="text-start mb-12">
								<h2 className="text-4xl font-bold text-gray-900 mb-4">
									Meet Our Team
								</h2>
								<p className="text-lg text-gray-600 max-w-3xl mx-auto">
									Meet the dedicated professionals behind Cecilia Home&apos;s
									architectural and engineering excellence. Our team combines
									expertise, creativity, and passion to bring your vision to
									life.
								</p>
							</div>
							{primaryMember.description?.map((paragraph, index) => (
								<p
									key={index}
									className="text-gray-700 text-lg leading-relaxed"
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				)}

				{/* Other Team Members */}
				<div className="mt-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{otherMembers.map((member) => (
							<TeamMemberCard key={member.id} member={member} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamsSection;
