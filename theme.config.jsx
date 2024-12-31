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
        title: 'Documentation | NextUpKit - Ship Startups Fast, Without Spending Much',
        description: 'The Next.js starter kit that will help you transform your ideas into reality without breaking the bank.',
        images: [{ url: 'https://lecturekit-assets.s3.amazonaws.com/og-ce7afca2-8b30-44c0-a04c-3bc9e3d0b0d2.png', width: 1200, height: 630 }]
      },
    };
  },
  footer: {
    text: 'NextUpKit Docs',
  },
};