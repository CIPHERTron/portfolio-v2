import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import BlogComponent from "components/blog/BlogComponent";
import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import type { BlogPostListProps } from "./types";

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const blogPosts = allPostsData.map((postData) => (
    <BlogComponent postData={postData} key={postData.title} />
  ));

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

      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Blog Posts
        </Heading>
        <Text>
          Lately I&apos;ve developed an interest in technical writing. Take
          alook at some of my posts.
        </Text>
      </Box>

      <Grid gap={16} marginY={12}>
        {blogPosts}
      </Grid>
    </Box>
  );
};

export default BlogPostList;
