import { GetStaticProps } from "next";

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
import { DataTypes, StateProps } from "@/utils/types";

interface HomeProps extends StateProps {
  services: DataTypes[];
  blogs: DataTypes[];
}

const Home: React.FC<HomeProps> = ({
  services,
  blogs,
  isThemeLight,
  toggleTheme,
}) => {
  return (
    <BasicLayout isThemeLight={isThemeLight} toggleTheme={toggleTheme}>
      <Hero isThemeLight={isThemeLight} />
      <NeedForSpeed isThemeLight={isThemeLight} />
      <SupportsBusiness />
      <Covid />
      <BuildWeb />
      <Services services={services} />
      <ClientsFrom />
      <FeaturedBlog blogs={blogs} />
    </BasicLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const services: DataTypes[] = await sanityClient.fetch(getServices);

  const updatedServices = services.map((service) => {
    return {
      ...service,
      link: `/services/${service.slug}`,
    };
  });

  const blogs: DataTypes[] = await sanityClient.fetch(getBlogs);

  const updatedBlogs = blogs.map((blog) => {
    return {
      ...blog,
      link: `/blog/${blog.slug}`,
    };
  });

  return {
    props: { services: updatedServices, blogs: updatedBlogs },
  };
};
