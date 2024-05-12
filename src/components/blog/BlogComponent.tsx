import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

import type { BlogPostType } from "models/blog";
import { dateFormatLong } from "utils/dateFormat";

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

type TagProp = {
  tag: string;
  mode: string;
};

const BlogContainer = styled(Box)`
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

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

const TagWrapper = styled.p`
  padding: 5px 10px;
  width: fit-content;
  border-radius: 4px;
  margin-right: 5px;
`;

const ImageContainer = styled.div`
  margin: 0;
  margin-bottom: 4px;
`;

const Tags = ({ tag, mode }: TagProp) => {
  return (
    <TagWrapper
      style={
        mode === "dark"
          ? { backgroundColor: "#014f86" }
          : { backgroundColor: "#90dbf4" }
      }
    >{`#${tag.toLowerCase()}`}</TagWrapper>
  );
};

const BlogComponent = ({ postData }: BlogPreviewProps) => {
  const { colorMode } = useColorMode();
  const content = postData.rawContent;
  const readTime = calculateReadTime(content || "");

  return (
    <Link href={`/blog/${postData.id}`} passHref>
      <BlogContainer
        style={
          colorMode === "dark"
            ? { backgroundColor: "#22223b", color: "#fff" }
            : { backgroundColor: "#EDF1FF", color: "#1A202C" }
        }
      >
        <ImageContainer>
          <img
            style={{ borderRadius: "20px 20px 0 0" }}
            src={postData.cover}
            alt={postData.description}
          />
        </ImageContainer>

        <Heading size="lg">{postData.title}</Heading>
        <Box>
          <Text>{`${dateFormatLong(postData.date)} ${readTime}`}</Text>
        </Box>
        <Text fontSize="md" lineHeight="1.5" mt="4">
          {postData.description}
        </Text>

        {/* <Button
          rightIcon={<FaArrowRight />}
          colorScheme="linkedin"
          variant="solid"
          mt={5}
        >
          Read More
        </Button> */}

        <div className="tags-container">
          {postData.tags?.map((item) => (
            <Tags key={item} mode={colorMode} tag={item} />
          ))}
        </div>
      </BlogContainer>
    </Link>
  );
};

export default BlogComponent;
