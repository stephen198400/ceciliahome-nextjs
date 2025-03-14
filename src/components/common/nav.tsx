'use client';

import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// Services data
const services: { title: string; href: string; description: string }[] = [
	{
		title: 'ADU Design',
		href: '/services/adu-design',
		description:
			'Accessory Dwelling Unit design providing complete solutions for independent living spaces.',
	},
	{
		title: 'Foundation Assessment',
		href: '/services/foundation-assessment',
		description:
			'Professional evaluation of foundation conditions and repair solutions to ensure building safety.',
	},
	{
		title: 'Interior Remodeling',
		href: '/services/interior-remodeling',
		description:
			'Modern renovation of interior spaces including kitchens, bathrooms, and bedrooms.',
	},
	{
		title: 'Load-Bearing Wall',
		href: '/services/load-bearing-wall',
		description:
			'Professional removal, modification, and reinforcement of load-bearing walls ensuring structural integrity.',
	},
	{
		title: 'Accessory Structures',
		href: '/services/accessory-structure',
		description:
			'Design and construction of outdoor structures including decks, patios, pergolas, and retaining walls.',
	},
	{
		title: 'Permit Application',
		href: '/services/permit-application',
		description:
			'Assistance with applying for and obtaining various building and construction permits.',
	},
];

export function Nav() {
	const [servicesOpen, setServicesOpen] = React.useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b  backdrop-blur bg-background">
			<div className="container mx-auto flex h-16 items-center px-4 md:px-6">
				{/* Logo section - always visible */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/logo.svg" // Ensure this file exists or replace with actual logo path
							alt="Cecilia Home"
							width={40}
							height={40}
							className="h-8 w-8"
						/>
						<span className="text-xl font-bold ">Cecilia Home</span>
					</Link>
				</div>

				{/* Desktop Navigation - hidden on mobile */}
				<div className="hidden flex-1 justify-center md:flex">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{services.map((service) => (
											<ListItem
												key={service.title}
												title={service.title}
												href={service.href}
											>
												{service.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/showcase" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Showcase
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/adus" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										ADUs
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Right section with CTA and mobile menu */}
				<div className="ml-auto flex items-center space-x-4">
					{/* CTA button - hidden on small mobile */}
					<Link href="/contact" className="hidden  sm:block">
						<Button className="bg-button-background">Contact Us</Button>
					</Link>

					{/* Mobile menu button - only visible on mobile */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
						<span className="sr-only">Toggle menu</span>
					</Button>
				</div>
			</div>

			{/* Mobile menu - dropdown from top with improved animation */}
			<div
				className={cn(
					'absolute left-0 right-0 top-16 z-50 bg-background border-b shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out',
					mobileMenuOpen
						? 'max-h-[1000px] opacity-100 border-b'
						: 'max-h-0 opacity-0 border-b-0 py-0'
				)}
			>
				<div
					className={cn(
						'container mx-auto px-4 transition-all duration-300',
						mobileMenuOpen ? 'py-4' : 'py-0'
					)}
				>
					<nav className="flex flex-col space-y-4">
						<Link
							href="/"
							className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
							onClick={() => setMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
							onClick={() => setMobileMenuOpen(false)}
						>
							About
						</Link>

						{/* Collapsible Services Menu */}
						<div className="py-2 border-b border-muted">
							<button
								onClick={() => setServicesOpen(!servicesOpen)}
								className="flex w-full items-center justify-between text-lg font-medium transition-colors hover:text-primary"
							>
								<span>Services</span>
								{servicesOpen ? (
									<ChevronDown className="h-4 w-4" />
								) : (
									<ChevronRight className="h-4 w-4" />
								)}
							</button>

							{servicesOpen && (
								<div className="flex flex-col space-y-2 mt-2 pl-4">
									{services.map((service) => (
										<Link
											key={service.title}
											href={service.href}
											className="text-sm transition-colors hover:text-primary py-1"
											onClick={() => setMobileMenuOpen(false)}
										>
											{service.title}
										</Link>
									))}
								</div>
							)}
						</div>

						<Link
							href="/showcase"
							className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
							onClick={() => setMobileMenuOpen(false)}
						>
							Showcase
						</Link>
						<Link
							href="/adus"
							className="text-lg font-medium transition-colors hover:text-primary py-2 border-b border-muted"
							onClick={() => setMobileMenuOpen(false)}
						>
							ADUs
						</Link>
						<div className="pt-2">
							<Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
								<Button className="w-full bg-button-background">
									Contact Us
								</Button>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
