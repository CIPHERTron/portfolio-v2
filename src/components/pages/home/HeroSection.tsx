import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const HeroSection = () => {
  const nameColor = useColorModeValue("#000", "#fff");
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
        <Heading
          as="h1"
          color="#808080"
          size="xl"
          textAlign="center"
          paddingBottom={11}
        >
          Hi, I&apos;m{" "}
          <Box color={nameColor} display="inline-block">
            Pritish Samal
          </Box>{" "}
          from India
        </Heading>
        <Text textAlign="center" fontWeight="bold" fontSize={["md", "xl"]}>
          Full Stack Developer and Cloud Enthusiast
        </Text>
        {/* <Links /> */}
        <Link mt={7} isExternal href="https://pritishsamal.com/resume.pdf">
          <Button
            leftIcon={<FaExternalLinkSquareAlt />}
            colorScheme="teal"
            variant="outline"
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default HeroSection;
