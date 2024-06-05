import { Box, Button, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box>
      <Button
        colorScheme="gray"
        variant="solid"
        size="sm"
        borderRadius="8px"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
      </Button>
    </Box>
  );
};

export default ThemeToggle;
