import type { GetStaticProps } from "next";

import type { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

import type { OtherProjectsProps } from "./types";

export const getStaticProps: GetStaticProps<OtherProjectsProps> = async () => {
  const otherProjects = getSortedProjectsData().filter(
    (project: ProjectType) =>
      !project.featured && project.published !== false && project
  );

  return {
    props: {
      otherProjects,
    },
  };
};
