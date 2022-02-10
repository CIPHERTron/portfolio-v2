import type { BoxProps } from "@chakra-ui/react";
import { Heading, Link, Text } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi, how are you?</Heading>

      <Text {...textProps}>
        I&apos;m Pritish, currently a junior year stydent at National Institute
        of Technology, Rourkela. Most of the time I work with React - TypeScript
        and Cloud native Technologies (recently). Sometimes I make fun projects
        and share it here.
      </Text>

      <Text {...textProps}>
        Outside working, I like to travel and{" "}
        <Link href="https://instagram.com/pritish__007" isExternal>
          <Text as="span" fontWeight="extrabold">
            capture moments.
          </Text>
        </Link>
      </Text>
    </MotionBox>
  );
};

export default Content;
