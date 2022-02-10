import type { GetStaticProps } from "next";

import type { BlogPostType } from "models/blog";
import type { ProjectType } from "models/project";
import { getSortedPostsData } from "utils/posts";
import { getSortedProjectsData } from "utils/projects";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjectsData: Array<ProjectType> = getSortedProjectsData();
  const allPostsData: Array<BlogPostType> = getSortedPostsData();

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};
