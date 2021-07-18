import { Dispatch, SetStateAction } from "react";

/**
 * types for data in ./data folder
 */
export interface BenefitTypes {
  title: string;
  icons: {
    avif: string;
    img: string;
  };
  content: string;
}

export interface LinkTypes {
  id: number;
  title: string;
  desc: string;
  link: string;
}

export interface BlogSubLinkTypes {
  category: string;
  links: { title: string; link: string }[];
}

/**
 * types for data (services & blogs) from Sanity
 */
export interface DataTypes {
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
export interface CardProps {
  item: DataTypes;
}

export interface SectionProps {
  special?: boolean;
}

export interface HeaderProps {
  isOpened?: boolean;
  setIsOpened?: Dispatch<SetStateAction<boolean>>;
  isVisible?: boolean;
}
