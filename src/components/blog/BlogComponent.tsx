import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import type { BlogPostType } from "models/blog";
import { dateFormatLong } from "utils/dateFormat";

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
  padding: 30px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

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
  return (
    <BlogContainer
      style={
        colorMode === "dark"
          ? { backgroundColor: "#22223b", color: "#fff" }
          : { backgroundColor: "#EDF1FF", color: "#1A202C" }
      }
    >
      <Heading size="2xl">{postData.title}</Heading>
      <Box>
        <Text>{`${dateFormatLong(postData.date)} . 7mins read`}</Text>
      </Box>
      <Text fontSize="lg" lineHeight="1.5" mt="4">
        {postData.description}
      </Text>
      <Link href={`/blog/${postData.id}`} passHref>
        <Button
          rightIcon={<FaArrowRight />}
          colorScheme="linkedin"
          variant="outline"
          mt={5}
        >
          Read More
        </Button>
      </Link>

      <div className="tags-container">
        {postData.tags?.map((item) => (
          <Tags key={item} mode={colorMode} tag={item} />
        ))}
      </div>
    </BlogContainer>
  );
};

export default BlogComponent;
