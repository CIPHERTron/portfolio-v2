import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
  height: fit-content;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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

const PastBlogsComponent = ({ postData }: BlogPreviewProps) => {
  const { colorMode } = useColorMode();
  const content = postData.rawContent;
  const readTime = calculateReadTime(content);

  return (
    <BlogContainer
      style={
        colorMode === "dark"
          ? { backgroundColor: "#22223b", color: "#fff" }
          : { backgroundColor: "#EDF1FF", color: "#1A202C" }
      }
    >
      <div>
        <Heading size="md">{postData.title}</Heading>
        <Box>
          <Text>{`${dateFormatLong(postData.date)} ${readTime}`}</Text>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={`/blog/${postData.id}`} passHref>
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="linkedin"
            variant="solid"
          >
            Read
          </Button>
        </Link>
      </div>
    </BlogContainer>
  );
};

export default PastBlogsComponent;
