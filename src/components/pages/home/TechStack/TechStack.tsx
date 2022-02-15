import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { skills } from "../../../../config/skills";

import SkillChip from "./SkillChip";

function TechStack() {
  return (
    <Box marginBottom={10} marginTop="15%">
      <Heading size="lg" marginBottom={2}>
        Tech Stack
      </Heading>
      <Box mx={3} my={7}>
        <Heading fontWeight="normal" color="#808080" size="md" marginBottom={2}>
          Languages
        </Heading>
        <SimpleGrid columns={[2, 4, 5]} spacing="10px">
          {skills.map(
            (skill) =>
              skill.type === "language" && (
                <SkillChip
                  key={skill.name}
                  name={skill.name}
                  url={skill.image}
                />
              )
          )}
        </SimpleGrid>
      </Box>

      <Box mx={3} my={5}>
        <Heading fontWeight="normal" color="#808080" size="md" marginBottom={2}>
          Tools & Technologies
        </Heading>
        <SimpleGrid columns={[2, 4, 5]} spacing="10px">
          {skills.map(
            (skill) =>
              skill.type === "technology" && (
                <SkillChip
                  key={skill.name}
                  name={skill.name}
                  url={skill.image}
                />
              )
          )}
        </SimpleGrid>
      </Box>

      <Box mx={3} my={5}>
        <Heading fontWeight="normal" color="#808080" size="md" marginBottom={2}>
          Platforms
        </Heading>
        <SimpleGrid columns={[2, 4, 5]} spacing="10px">
          {skills.map(
            (skill) =>
              skill.type === "platform" && (
                <SkillChip
                  key={skill.name}
                  name={skill.name}
                  url={skill.image}
                />
              )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TechStack;
