const fields = `
_id,
title,
excerpt,
"slug": slug.current,
"image": mainImage,
`;

export const getServices = `*[_type == "service"]{
  ${fields}
}`;

export const getBlogs = `*[_type == "blog"]{
  ${fields}
  publishedAt
}`;
