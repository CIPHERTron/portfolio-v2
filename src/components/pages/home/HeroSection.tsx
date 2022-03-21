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
import styled from "@emotion/styled";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HeroSection = () => {
  const nameColor = useColorModeValue("#000", "#fff");

  return (
    <Container
      height="90vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
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
          src="https://res.cloudinary.com/pritish007/image/upload/v1647859319/Personal%20Portfolio/Pritish_1_clsbba.jpg"
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
        <Link
          style={{ textDecoration: "none" }}
          mt={7}
          isExternal
          href="https://pritishsamal.com/resume.pdf"
        >
          <Button
            leftIcon={<FaExternalLinkSquareAlt />}
            colorScheme="teal"
            variant="solid"
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default HeroSection;
