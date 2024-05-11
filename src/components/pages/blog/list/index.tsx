import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import BlogComponent from "components/blog/BlogComponent";
import PastBlogsComponent from "components/blog/PastBlogsComponent";
import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import type { BlogPostListProps } from "./types";

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const latest = allPostsData.filter(x => x.latest)
  const past = allPostsData.filter(x => !x.latest)
  const blogPosts = latest.map((postData) => (
    <BlogComponent postData={postData} key={postData.title} />
  ));

  const pastBlogs = past.map((postData) => (
    <PastBlogsComponent postData={postData} key={postData.title} />
  ))

  return (
    <Box>
      <NextSeo
        title="Blog Posts"
        canonical={`${baseUrl}/blog`}
        openGraph={{
          title: "Blog Posts | Pritish",
          images: [
            {
              url: PSOgImage("Blog Posts | Pritish"),
              alt: "Blog Posts | Pritish og-image",
            },
          ],
        }}
      />

      <Heading as="h1" size="xl" marginBottom={6}>
        Latest Post
      </Heading>
      <Grid gap={16} marginBottom={8}>
        {blogPosts}
      </Grid>

      <Heading as="h1" size="xl" marginBottom={6}>
        More Posts
      </Heading>
      <Grid gap={6} marginBottom={12}>
        {pastBlogs}
      </Grid>
    </Box>
  );
};

export default BlogPostList;
