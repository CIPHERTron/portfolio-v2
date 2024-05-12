import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { projects } from "../../../config/projects";
import ProjectCard from "components/projects/ProjectCard";

import NotableProjects from "./NotableProjects";

function ProjectPage() {
  return (
    <Box>
      <Heading size="xl">Featured Projects 👨🏻‍💻</Heading>

      {projects.map(
        (item) =>
          item.featured && (
            <ProjectCard
              key={item.name}
              name={item.name}
              desc={item.desc}
              github={item.github}
              demo={item.demo}
              preview={item.preview}
              tech={item.tech}
            />
          )
      )}

      <Heading size="xl" marginTop="7%">
        Pet Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} spacing="40px">
        {projects.map(
          (item) =>
            !item.featured && (
              <NotableProjects
                key={item.name}
                name={item.name}
                desc={item.desc}
                github={item.github}
                demo={item.demo}
              />
            )
        )}
      </SimpleGrid>
    </Box>
  );
}

export default ProjectPage;
