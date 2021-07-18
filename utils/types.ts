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
