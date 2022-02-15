import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./meta";
import MobileNav from "./Navbar/MobileNav";
import TabBar from "./TabBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isMobileView = useMediaQuery("(max-width: 700px)");
  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.900", "gray.200");

  return (
    <Box
      backgroundColor={backgroundColor}
      color={textColor}
      minHeight="100vh"
      pt={24}
      pb={2}
      transition="0.4s ease-out"
    >
      <Meta />
      {isMobileView ? <MobileNav /> : <Header />}

      <Stack
        maxWidth={["100vw", "100vw", "85vw", "800px"]}
        position="relative"
        zIndex={1}
        margin="0 auto"
        spacing={8}
      >
        <Box as="main" layerStyle="layoutBlock">
          {children}
        </Box>
        <Footer />
      </Stack>
      <TabBar />
    </Box>
  );
};

export default Layout;
