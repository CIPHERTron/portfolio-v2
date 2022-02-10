import { Box, Grid, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import ProjectListBottomNav from "./BottomNav";
import type { ProjectListProps } from "./types";

const ProjectList = ({ featuredProjects }: ProjectListProps) => {
  const projects = featuredProjects.map((projectData) => {
    return (
      <ProjectDetailWrapper
        projectData={projectData}
        source="Featured Projects"
        key={projectData.id}
      />
    );
  });

  return (
    <>
      <NextSeo
        title="Projects"
        canonical={`${baseUrl}/projects`}
        openGraph={{
          title: "Projects by Pritish",
          images: [
            {
              url: PSOgImage("Projects"),
              alt: "Projects | Pritish og-image",
            },
          ],
        }}
      />

      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>

      <Grid gap={6} marginBottom={8}>
        {projects}
      </Grid>

      <ProjectListBottomNav />
    </>
  );
};

export default ProjectList;
