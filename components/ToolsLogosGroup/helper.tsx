import { LogoProps } from "@/utils/types";
import {
  Contentful,
  Storyblok,
  Sanity,
  Forestry,
  Dato,
  Prismic,
  Strapi,
  WordPress,
  Next,
  Gatsby,
  Eleventy,
  Hugo,
  Nuxt,
  Scully,
  Gridsome,
  Jekyll,
  Netlify,
  Vercel,
  CloudflarePages,
  Aws,
  Firebase,
  Azure,
  Render,
  DigitalOcean,
  Begin,
} from "../Logos";

export const icon = ({ name, width, height }: LogoProps) => {
  switch (name) {
    case "Contentful":
      return <Contentful width={width} height={height} />;

    case "Storyblok":
      return <Storyblok width={width} height={height} />;

    case "Sanity":
      return <Sanity width={width} height={height} />;

    case "Forestry":
      return <Forestry width={width} height={height} />;

    case "Dato":
      return <Dato width={width} height={height} />;

    case "Prismic":
      return <Prismic width={width} height={height} />;

    case "Strapi":
      return <Strapi width={width} height={height} />;

    case "WordPress":
      return <WordPress width={width} height={height} />;

    case "Next.js":
      return <Next width={width} height={height} />;

    case "Gatsby":
      return <Gatsby width={width} height={height} />;

    case "11ty":
      return <Eleventy width={width} height={height} />;

    case "Hugo":
      return <Hugo width={width} height={height} />;

    case "Nuxt":
      return <Nuxt width={width} height={height} />;

    case "scully":
      return <Scully width={width} height={height} />;

    case "Gridsome":
      return <Gridsome width={width} height={height} />;

    case "Jekyll":
      return <Jekyll width={width} height={height} />;

    case "Netlify":
      return <Netlify width={width} height={height} />;

    case "Vercel":
      return <Vercel width={width} height={height} />;

    case "Cloudflare Pages":
      return <CloudflarePages width={width} height={height} />;

    case "aws":
      return <Aws width={width} height={height} />;

    case "Firebase":
      return <Firebase width={width} height={height} />;

    case "Azure":
      return <Azure width={width} height={height} />;

    case "render":
      return <Render width={width} height={height} />;

    case "DigitalOcean":
      return <DigitalOcean width={width} height={height} />;

    case "begin":
      return <Begin width={width} height={height} />;

    default:
      return null;
  }
};
