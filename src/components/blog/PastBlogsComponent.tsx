import { Box, Heading, Text, Image, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

import useMediaQuery from "hooks/useMediaQuery";
import type { BlogPostType } from "models/blog";
import { dateFormatLong } from "utils/dateFormat";
// import { calculateReadTime } from "utils/posts";

function calculateReadTime(str: string) {
  const wordsPerMinute = 200; // Average case.
  let result;

  const textLength = str.split(" ").length; // Split by words
  if (textLength > 0) {
    const value = Math.ceil(textLength / wordsPerMinute);
    result = `~ ${value} min read`;
  }

  return result;
}

type BlogPreviewProps = {
  postData: BlogPostType;
};

const BlogContainer = styled(Box)`
  width: 100%;
  cursor: pointer;
  height: fit-content;
  border-radius: 20px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 700px) {
    display: flex;
    gap: 0;
  }

  @media (max-width: 500px) {
    padding: 15px 20px;
  }

  .tags-container {
    margin-top: 12px;
    display: flex;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const PastBlogsComponent = ({ postData }: BlogPreviewProps) => {
  const { colorMode } = useColorMode();
  const content = postData.rawContent;
  const readTime = calculateReadTime(content);
  const isMobileView = useMediaQuery("(max-width: 700px)");

  return (
    <Link href={`/blog/${postData.id}`} passHref>
      <BlogContainer
        style={
          colorMode === "dark"
            ? { backgroundColor: "#22223b", color: "#fff" }
            : { backgroundColor: "#EDF1FF", color: "#1A202C" }
        }
      >
        {!isMobileView ? (
          <ImageWrapper>
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius={8}
              src={postData.cover}
            />
          </ImageWrapper>
        ) : (
          <i />
        )}

        <div>
          <Heading size="md">{postData.title}</Heading>
          <Box>
            <Text>{`${dateFormatLong(postData.date)} ${readTime}`}</Text>
          </Box>
        </div>
      </BlogContainer>
    </Link>
  );
};

export default PastBlogsComponent;
