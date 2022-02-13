import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "../ThemeToggle";

import HamMenu from "./HamMenu";
import { navigations } from "./navconfig";

const Brand = () => {
  return (
    <Link href="/" passHref>
      <Text
        style={{ fontWeight: "bolder" }}
        as="a"
        cursor="pointer"
        fontSize="xl"
      >
        PS.
      </Text>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10vh;
  height: 90vh;
  width: 100%;

  z-index: 1000;

  .item {
    font-size: 24px;
    font-weight: bold;
    margin: 20px auto;
  }
`;

const NavItems = () => {
  const { colorMode } = useColorMode();
  return (
    <NavItemsWrapper
      style={
        colorMode === "light"
          ? { backgroundColor: "#F6F6F6", color: "#1A202C" }
          : { color: "#F6F6F6", backgroundColor: "#1A202C" }
      }
    >
      {navigations.map((item) => {
        return (
          <Link key={item.label} href={item.href} passHref>
            <span className="item">{item.label}</span>
          </Link>
        );
      })}
      <ThemeToggle />
    </NavItemsWrapper>
  );
};

const MobileNav = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
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
        height="10vh"
        width="full"
        mx="auto"
        my="0"
      >
        <Flex
          layerStyle="layoutBlock"
          mx="auto"
          my="0"
          maxWidth="800px"
          as="header"
          alignItems="center"
          justifyContent="space-between"
        >
          <Brand />
          <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Flex>
      </Box>

      {isOpen && <NavItems />}
    </Container>
  );
};

export default MobileNav;
