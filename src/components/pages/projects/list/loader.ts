import type { GetStaticProps } from "next";

import type { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

import type { ProjectListProps } from "./types";

export const getStaticProps: GetStaticProps<ProjectListProps> = async () => {
  const featuredProjects = getSortedProjectsData().filter(
    (project: ProjectType) =>
      project.featured && project.published !== false && project
  );

  return {
    props: {
      featuredProjects,
    },
  };
};
