import fs from "fs";
import type { GetStaticProps } from "next";

import type { BlogPostType } from "models/blog";
import { generateRss } from "utils/generateRss";
import { getPostData, getSortedPostsData } from "utils/posts";

import type { BlogPostListProps } from "./types";

export const getStaticProps: GetStaticProps<BlogPostListProps> = async () => {
  const allPostsData = getSortedPostsData().filter(
    (post: BlogPostType) => post.id !== null || post.id !== undefined
  );

  allPostsData.forEach(async (x: BlogPostType) => {
    const { rawContent } = await getPostData(x.id);
    x.rawContent = rawContent;
  });

  const rss = await generateRss(allPostsData);
  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      allPostsData,
    },
  };
};
