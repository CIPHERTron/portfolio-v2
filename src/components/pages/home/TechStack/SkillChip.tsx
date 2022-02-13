import { Box, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";

type SkillChipProps = {
  name: string;
  url: string;
};

function SkillChip({ name, url }: SkillChipProps) {
  const bg = useColorModeValue("#F6F6F6", "#22223b");
  const textColor = useColorModeValue("#1A202C", "#fff");
  return (
    <Box padding={2} backgroundColor={bg} borderRadius="md" cursor="pointer">
      <Flex justify="space-around">
        <Image boxSize="25px" src={url} alt="random text" />
        <Text color={textColor}>{name}</Text>
      </Flex>
    </Box>
  );
}

export default SkillChip;
