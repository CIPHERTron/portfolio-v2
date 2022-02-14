import { Box, Heading } from "@chakra-ui/react";

import { projects } from "../../../config/projects";
import ProjectCard from "components/projects/ProjectCard";

function ProjectsSection() {
  return (
    <Box marginBottom={10} mt={7}>
      <Heading size="lg" marginBottom={2} marginTop={7}>
        Featured Projects
      </Heading>

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
    </Box>
  );
}

export default ProjectsSection;
