import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import type { ProjectDetailWrapperProps } from "./types";

type ProjectDetailContentProps = Pick<ProjectDetailWrapperProps, "projectData">;

const ProjectDetailContent = ({
  projectData: { title, icon, description, stacks },
}: ProjectDetailContentProps) => {
  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.200", "gray.700");
  const descriptionTextColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box
      width="100%"
      height="100%"
      padding={8}
      borderRadius={24}
      borderWidth={2}
      borderColor={backgroundColor}
    >
      <Flex alignItems="center" width="100%" height="100%" gridGap={8}>
        <Flex gridGap={6} wrap="wrap" flexBasis="85%" height="full">
          <Box alignSelf="flex-start" width="full">
            <Heading size="md" marginBottom={2}>
              {title}
            </Heading>
            <Text fontSize="sm" color={descriptionTextColor}>
              {description}
            </Text>
          </Box>

          {stacks && (
            <Flex marginTop={11} alignItems="center" opacity="0.6">
              {stacks.map((stack) => (
                <Box
                  marginRight={3}
                  key={stack}
                  style={{ filter: "drop-shadow(0 0 12px rgb(98, 114, 164))" }}
                >
                  <Image
                    width={25}
                    height={25}
                    src={`/stacks_logo/${colorMode}/${stack}.svg`}
                    alt={stack}
                  />
                </Box>
              ))}
            </Flex>
          )}
        </Flex>

        {icon && (
          <Box flexBasis="15%">
            <Flex maxWidth={16} marginX="auto">
              <Image width="100%" height="100%" src={icon} alt={title} />
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default ProjectDetailContent;
