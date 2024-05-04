/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-await-in-loop */
import RSS from "rss";

import type { BlogPostType } from "models/blog";

import { getPostData } from "./posts";

const generateRssItem = async (post: BlogPostType) => {
  const postData: any = await getPostData(post.id);

  return {
    title: postData.title,
    id: postData.id,
    date: new Date(postData.date).toUTCString(),
    description: postData.description ? postData.description : "",
    contentHtml: postData.contentHtml,
  };
};

export const generateRss = async (
  posts: Array<BlogPostType>
): Promise<string> => {
  const feed = new RSS({
    title: "sozonome's blog",
    site_url: "https://sznm.dev",
    feed_url: "https://sznm.dev/rss.xml",
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item: any = await generateRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://pritishsamal.xyz/blog/${item.id}`,
        url: `https://pritishsamal.xyz/blog/${item.id}`,
        date: item.date,
        description: "",
        author: "CIPHERTron",
        custom_elements: [{ "content:encoded": item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};
