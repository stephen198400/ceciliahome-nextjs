import Footer from '@/components/common/footer';
import { Nav } from '@/components/common/nav';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	metadataBase: new URL('https://www.cecilia123.com'),
	verification: {
		google: 'your-google-verification-code',
	},
	robots: {
		index: true,
		follow: true,
		'max-image-preview': 'large',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: 'Cecilia Home',
	},
	twitter: {
		card: 'summary_large_image',
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
		other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg' }],
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				<Nav />
				<main className="">{children}</main>
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
