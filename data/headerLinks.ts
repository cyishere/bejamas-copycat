import { BlogSubLinkTypes, LinkTypes } from "@/utils/types";

export const serviceLinks: LinkTypes[] = [
  {
    id: 1,
    title: "Jamstack Website",
    desc: "From landing page to complex corporate website.",
    link: "/services/jamstack-website",
  },
  {
    id: 2,
    title: "Progressive Web App",
    desc: "Fast, native-like web app.",
    link: "/services/progressive-web-app",
  },
  {
    id: 3,
    title: "eCommerce",
    desc: "Increase conversion rate by speeding up your store.",
    link: "/services/ecommerce",
  },
];

export const blogLinks: LinkTypes[] = [
  {
    id: 1,
    title: "Jamstack, explained.",
    desc: "What the heck is Jamstack? Click to start your journey.",
    link: "/blog/jamstack",
  },
];

export const blogSubLinks: BlogSubLinkTypes[] = [
  {
    category: "Guide To",
    links: [
      {
        title: "Best Headless CMS",
        link: "/blog/headless-cms",
      },
      {
        title: "Static Site Generators",
        link: "/blog/static-site-generators",
      },
      {
        title: "Deployment Platforms",
        link: "/blog/jamstack-hosting-deployment",
      },
      {
        title: "Jamstack SEO",
        link: "/blog/jamstack-seo-guide",
      },
    ],
  },
  {
    category: "Insights",
    links: [
      {
        title: "Jamstack Ecosystem",
        link: "/blog/jamstack-ecosystem",
      },
      {
        title: "Jamstack for Clients",
        link: "/blog/jamstack-for-clients",
      },
      {
        title: "Free Resources",
        link: "/blog/resources",
      },
      {
        title: "Compare Tool",
        link: "/blog/compare",
      },
    ],
  },
];
