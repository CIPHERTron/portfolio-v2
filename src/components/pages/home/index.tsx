import { Box } from "@chakra-ui/react";

import Experience from "./Experience/Experience";
import HeroSection from "./HeroSection";
import PostsSection from "./PostsSection";
import ProjectsSection from "./ProjectsSection";
import TechStack from "./TechStack/TechStack";
import type { HomeProps } from "./types";
import VolunteerExperience from "./Volunteering/VolunteerExperience";

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Box marginTop={-24}>
      <HeroSection />
      <Experience />
      <TechStack />
      <PostsSection data={allPostsData} />
      <ProjectsSection />
      <VolunteerExperience />
    </Box>
  );
};

export default Home;
