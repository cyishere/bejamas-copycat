/* eslint-disable no-undef */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // useCdn: process.env.NODE_ENV === 'production',
  useCdn: true,
  apiVersion: "2021-07-17",
};

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
