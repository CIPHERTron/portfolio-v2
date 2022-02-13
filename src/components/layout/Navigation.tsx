import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem = ({ href, label }: NavItemProps) => {
  const router = useRouter();

  const handleClickNavigation = () => {
    router.push(href);
  };

  return (
    <Text
      cursor="pointer"
      margin="auto 32px"
      fontWeight="bold"
      onClick={handleClickNavigation}
    >
      {label}
    </Text>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

const Navigation = () => {
  return (
    <Flex display={["none", "none", "flex"]}>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </Flex>
  );
};

export const MNav = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      backgroundColor={
        colorMode === "light"
          ? "rgba(247, 250, 252, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
    >
      <Flex
        display={["flex", "flex", "none"]}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {navigations.map((navigation) => (
          <NavItem {...navigation} key={navigation.label} />
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;
