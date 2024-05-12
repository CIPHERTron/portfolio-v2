import { Box, Heading, Image } from "@chakra-ui/react";

const HeadSection = () => {
  return (
    <Box marginBottom={[8]}>
      <Heading mb={4} size="xl">
        👋 Hi, I'm Pritish.
      </Heading>
      <Image
        src="https://res.cloudinary.com/pritish007/image/upload/v1715515689/Personal%20Portfolio/personal_cover.jpg"
        alt="Pritish Samal | Cover Image"
        borderRadius={7}
      />
    </Box>
  );
};

export default HeadSection;
