import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

type SkillChipProps = {
  name: string;
  url: string;
};

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function SkillChip({ name, url }: SkillChipProps) {
  const bg = useColorModeValue("#F6F6F6", "#22223b");
  const textColor = useColorModeValue("#1A202C", "#fff");
  return (
    <Container
      padding={2}
      backgroundColor={bg}
      borderRadius="md"
      cursor="pointer"
    >
      <Flex justify="space-around">
        <Image boxSize="25px" src={url} alt="random text" />
        <Text color={textColor}>{name}</Text>
      </Flex>
    </Container>
  );
}

export default SkillChip;
