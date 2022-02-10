import { Box, Flex, Heading, Link, Text, Image } from "@chakra-ui/react";

import { dateFormatLong } from "utils/dateFormat";

import type { BlogPostProps } from "./types";

type BlogPostHeadProps = Pick<BlogPostProps, "postData">;

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Flex alignItems="center" justifyContent="center" marginBottom={16}>
      <Box>
        <Heading as="h1" size="2xl" textAlign="center" marginBottom={3}>
          {postData.title}
        </Heading>
        <Link href={postData.articleLink} isExternal>
          <Text textAlign="center" textDecoration="underline">
            [Oginally Posted Here]
          </Text>
        </Link>

        <Text textAlign="center" mb={3}>
          {dateFormatLong(postData.date)}
        </Text>

        <Image src={postData.cover} />
      </Box>
    </Flex>
  );
};

export default BlogPostHead;
