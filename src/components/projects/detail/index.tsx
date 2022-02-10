import { Link } from "@chakra-ui/react";

import ProjectDetailContent from "./Content";
import type { ProjectDetailWrapperProps } from "./types";

const ProjectDetailWrapper = ({ projectData }: ProjectDetailWrapperProps) => {
  const link =
    projectData.playStoreLink ??
    projectData.projectLink ??
    projectData.repoLink;

  if (link) {
    return (
      <Link href={link} isExternal key={projectData.id}>
        <ProjectDetailContent projectData={projectData} />
      </Link>
    );
  }

  return (
    <ProjectDetailContent projectData={projectData} key={projectData.id} />
  );
};

export default ProjectDetailWrapper;
