import { Divider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { baseUrl } from "constants/baseUrl";

import Content from "./Content";
import HeadSection from "./HeadSection";
import Links from "./Links";
import Service from "./Service";

const About = () => {
  return (
    <>
      <NextSeo
        title="About"
        canonical={`${baseUrl}/about`}
        openGraph={{
          title: "About Pritish",
          description: "About sznm.dev page",
        }}
      />

      <HeadSection />
      <Content />
      <Links />
      <Divider my={7} />
      <Service />
    </>
  );
};

export default About;
