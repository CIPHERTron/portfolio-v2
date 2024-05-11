import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// import BlogPostPreview from "components/blog/BlogPostPreview";
import BlogComponent from "../../blog/BlogComponent";
import type { BlogPostType } from "models/blog";

export type PostsSectionProps = {
  data: Array<BlogPostType>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  return (
    <Stack as="section" spacing={4}>
      <Heading size="lg" mt="15%" marginBottom={2}>
        Latest Post
      </Heading>

      <Grid gap={8}>
        {data
          .filter((post) => post.latest === true)
          // .slice(0, 2)
          .map((postData) => (
            <BlogComponent postData={postData} key={postData.id} />
          ))}
      </Grid>

      <Box>
        <Link href="/blog" passHref>
          <Button
            as="a"
            rightIcon={<FaArrowRight />}
            paddingX={1}
            variant="ghost"
            fontFamily="heading"
          >
            view more posts
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default PostsSection;
