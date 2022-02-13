import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
        <Box
          cursor="pointer"
          display={{ base: "block", md: "none" }}
          onClick={toggle}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
