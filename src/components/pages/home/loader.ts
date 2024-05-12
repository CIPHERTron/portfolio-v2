import type { GetStaticProps } from "next";

import type { BlogPostType } from "models/blog";
import type { ProjectType } from "models/project";
import { getPostData, getSortedPostsData } from "utils/posts";
import { getSortedProjectsData } from "utils/projects";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjectsData: Array<ProjectType> = getSortedProjectsData();
  const allPostsData: Array<BlogPostType> = getSortedPostsData().filter(
    (post: BlogPostType) => post.latest
  );

  allPostsData.forEach(async (x: BlogPostType) => {
    const { rawContent } = await getPostData(x.id);
    x.rawContent = rawContent;
  });

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};
