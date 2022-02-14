import { Box } from "@chakra-ui/react";

import Experience from "./Experience/Experience";
import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import TechStack from "./TechStack/TechStack";
import type { HomeProps } from "./types";

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <Experience />
      <TechStack />
      <ProjectsSection />
      <PostsSection data={allPostsData} />
    </Box>
  );
};

export default Home;
