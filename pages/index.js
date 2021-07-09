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

export default function Home() {
  return (
    <BasicLayout>
      <Hero />
      <NeedForSpeed />
      <SupportsBusiness />
      <Covid />
      <BuildWeb />
      <Services />
      <ClientsFrom />
      <FeaturedBlog />
    </BasicLayout>
  );
}
