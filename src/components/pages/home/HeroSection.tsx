import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

import Links from "../about/Links";

const HeroSection = () => {
  return (
    <Box height="90vh" alignItems="center" display="grid" width={["100%"]}>
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        width={["100%"]}
        marginTop={[8, 0]}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://avatars.githubusercontent.com/u/56754747"
          alt="Pritish Samal"
          marginTop={[8, 4]}
          marginBottom={[8, 4]}
        />
        <Heading as="h1" size="xl" textAlign="center" paddingBottom={11}>
          Hi, I&apos;m Pritish from India
        </Heading>
        <Text textAlign="center" fontSize={["md", "xl"]}>
          Full Stack Developer and Cloud Enthusiast
        </Text>
        <Links />
      </Flex>
    </Box>
  );
};

export default HeroSection;
