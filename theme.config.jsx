import { useConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';

export default {
	logo: <Logo />,
	project: {
		link: 'https://github.com/geiger01/nextupkit-docs',
	},
	docsRepositoryBase: 'https://github.com/geiger01/nextupkit-docs',
	useNextSeoProps() {
		return {
			titleTemplate: 'Documentation - NextUpKit',
			openGraph: {
				title:
					'Documentation | NextUpKit - Ship Startups Fast, Without Spending Much',
				description:
					'NextUpKit is an affordable Next.js starter kit and boilerplate to help you build and launch your SaaS products quickly and affordably.',
				images: [
					{
						url: 'https://lecturekit-assets.s3.eu-north-1.amazonaws.com/nextupkit-og.png',
						width: 1200,
						height: 630,
					},
				],
			},
		};
	},
	head() {
		const config = useConfig();
		const title = config.title + ' | NextUpKit';

		const description =
			'NextUpKit is an affordable Next.js starter kit and boilerplate to help you build and launch your SaaS products quickly and affordably.';
		const ogImage =
			'https://lecturekit-assets.s3.eu-north-1.amazonaws.com/nextupkit-og.png';

		return (
			<>
				<title>{title}</title>
				<meta property='og:title' content={title} />
				<meta property='description' content={description} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={ogImage} />
			</>
		);
	},
	footer: {
		text: 'NextUpKit Docs',
	},
};