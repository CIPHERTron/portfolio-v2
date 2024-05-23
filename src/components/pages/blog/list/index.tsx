import {
  Box,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

import BlogComponent from "components/blog/BlogComponent";
import PastBlogsComponent from "components/blog/PastBlogsComponent";
import { baseUrl } from "constants/baseUrl";
import useFuzzySearch from "hooks/useFuzzySearch";
import { PSOgImage } from "utils/PSOgImage";

import type { BlogPostListProps } from "./types";

const SearchBarWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 3%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 10%;

    margin-bottom: 10%;
  }
`;

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const [query, setQuery] = useState("");
  const latest = allPostsData.filter((x) => x.latest);
  const past = allPostsData.filter((x) => !x.latest);
  const blogPosts = latest.map((postData) => (
    <BlogComponent postData={postData} key={postData.title} />
  ));

  const filteredBlogs = useFuzzySearch(past, query);

  const pastBlogs = filteredBlogs.map((postData) => (
    <PastBlogsComponent postData={postData} key={postData.title} />
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

      <Heading as="h1" size="xl" marginBottom={6}>
        Latest Post 📝
      </Heading>
      <Grid gap={16} marginBottom={8}>
        {blogPosts}
      </Grid>

      <SearchBarWrapper>
        <Heading as="h1" size="xl">
          More Posts 📑
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <ImSearch />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Type title to search..."
            variant="filled"
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </SearchBarWrapper>

      <Grid gap={6} marginBottom={12}>
        {pastBlogs}
      </Grid>
    </Box>
  );
};

export default BlogPostList;
