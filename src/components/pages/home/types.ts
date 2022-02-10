import type { BlogPostType } from "models/blog";
import type { ProjectType } from "models/project";

export type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};
