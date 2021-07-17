import BasicLayout from "@/components/Layout/BasicLayout";
import {
  Hero,
  NeedForSpeed,
  SupportsBusiness,
  Covid,
  BuildWeb,
  Services,
  ClientsFrom,
  FeaturedBlog,
} from "@/components/Home";
import { sanityClient } from "@/utils/sanity";
import { getBlogs, getServices } from "@/utils/queries";

export default function Home({ services, blogs }) {
  return (
    <BasicLayout>
      <Hero />
      <NeedForSpeed />
      <SupportsBusiness />
      <Covid />
      <BuildWeb />
      <Services services={services} />
      <ClientsFrom />
      <FeaturedBlog blogs={blogs} />
    </BasicLayout>
  );
}

export async function getStaticProps() {
  const services = await sanityClient.fetch(getServices);

  const updatedServices = services.map((service) => {
    return {
      ...service,
      link: `/services/${service.slug}`,
    };
  });

  const blogs = await sanityClient.fetch(getBlogs);

  const updatedBlogs = blogs.map((blog) => {
    return {
      ...blog,
      link: `/blog/${blog.slug}`,
    };
  });

  return {
    props: { services: updatedServices, blogs: updatedBlogs },
  };
}
