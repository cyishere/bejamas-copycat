import { Dispatch, SetStateAction } from "react";

export interface benefitTypes {
  title: string;
  icons: {
    avif: string;
    img: string;
  };
  content: string;
}

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
}

export interface cardProps {
  item: dataTypes;
}

export interface SectionProps {
  special?: boolean;
}

export interface headerProps {
  isOpened?: boolean;
  setIsOpened?: Dispatch<SetStateAction<boolean>>;
  isVisible?: boolean;
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
