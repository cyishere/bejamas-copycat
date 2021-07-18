import { Dispatch, SetStateAction } from "react";

/**
 * types for data in ./data folder
 */
export interface benefitTypes {
  title: string;
  icons: {
    avif: string;
    img: string;
  };
  content: string;
}

export interface linkType {
  id: number;
  title: string;
  desc: string;
  link: string;
}

export interface blogSubLinksType {
  category: string;
  links: { title: string; link: string }[];
}

/**
 * types for data (services & blogs) from Sanity
 */
export interface dataTypes {
  _id: string;
  title: string;
  link: string;
  excerpt: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt?: string;
  slug?: string;
}

/**
 * types for components
 */
export interface cardProps {
  item: dataTypes;
}

export interface sectionProps {
  special?: boolean;
}

export interface headerProps {
  isOpened?: boolean;
  setIsOpened?: Dispatch<SetStateAction<boolean>>;
  isVisible?: boolean;
}
