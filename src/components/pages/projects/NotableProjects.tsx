import { Box, Text, Heading, Link, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 300px;
  padding: 30px;
  margin: 14px auto;
  border-radius: 12px;
  border-bottom: none;
  cursor: pointer;

  &:hover {
    transition: all 1s ease-in-out;
    border-bottom: 10px solid purple;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 22px;
  font-weight: bolder;
  font-size: 30px;
`;

type NotableProjectsProp = {
  name: string;
  desc: string;
  github: string;
  demo: string;
  // preview: string;
  // tech: Array<string>;
};

function NotableProjects({ name, desc, github, demo }: NotableProjectsProp) {
  const { colorMode } = useColorMode();
  return (
    <Wrapper
      style={
        colorMode === "dark"
          ? { backgroundColor: "#22223B" }
          : { backgroundColor: "#edf1ff" }
      }
    >
      <Heading size="lg">{name}</Heading>
      <Text fontSize="sm" mt="5">
        {desc}
      </Text>
      <IconWrapper>
        <Link href={github} isExternal style={{ marginRight: "22px" }}>
          <FaGithub />
        </Link>
        <Link href={demo} isExternal>
          <FaExternalLinkSquareAlt />
        </Link>
      </IconWrapper>
    </Wrapper>
  );
}

export default NotableProjects;
