import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      zIndex={5}
      backgroundColor={
        colorMode === "light"
          ? "rgba(247, 250, 252, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
      layerStyle="blur-bg"
      width="full"
    >
      <Flex
        layerStyle="layoutBlock"
        marginX="auto"
        maxWidth="800px"
        as="header"
        alignItems="center"
        justifyContent="space-around"
      >
        <Link href="/" passHref>
          <Text
            style={{ fontWeight: "bolder" }}
            as="a"
            cursor="pointer"
            fontSize={["md", "xl"]}
          >
            PS.
          </Text>
        </Link>

        <Navigation />

        <ThemeToggle />
      </Flex>
    </Box>
  );
};

export default Header;
