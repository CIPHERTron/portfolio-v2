import type { GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import type { ProjectType } from "models/project";
import { getAllProjectIds, getProjectData } from "utils/projects";

import type { ProjectDetailParams, ProjectDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProjectDetailProps,
  ProjectDetailParams
> = async ({ params }) => {
  const projectData = (await getProjectData(
    (params as ParsedUrlQuery).id as string
  )) as ProjectType;

  return {
    props: { projectData },
  };
};
