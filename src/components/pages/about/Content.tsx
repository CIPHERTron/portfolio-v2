import type { BoxProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

const textProps: BoxProps = {
  marginY: 4,
  fontSize: [18, 20],
  textAlign: "left",
};

// https://res.cloudinary.com/pritish007/image/upload/v1715515689/Personal%20Portfolio/personal_cover.jpg

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
      <Text {...textProps}>
        I&apos;m a passionate <b>Full Stack Developer</b> from 🇮🇳 with a knack
        for crafting robust applications and contributing to the open-source
        community. Graduating from <b>NIT Rourkela</b> with a degree in{" "}
        <b>Ceramic Engineering</b>, my journey led me to the exciting world of
        technology, where I specialize in MERN Stack, Golang, Java, Python,
        Flask, and frameworks like Next.js & Gatsby. At the moment, I&apos;m
        exploring how we can use{" "}
        <b>Next.js 13 app router, tRPC, Prisma, and Postgre</b>s to create
        impactful solutions.
      </Text>

      <Text {...textProps}>
        In the midst of the pandemic, I immersed myself in coding, organizing
        hackathons, and mentoring students. Now, as a <b>Software Engineer</b>{" "}
        at <b>Harness</b>, I continue to push boundaries, leveraging
        technologies like
        <b>React, TS, Jest, Java, Golang, and Cypress</b>. When I&apos;m not
        coding, you&apos;ll find me on the field playing football or capturing
        moments with my mobile camera.
      </Text>

      <Text {...textProps}>
        With a commitment to writing clean code and a passion for learning,
        I&apos;m dedicated to making a positive impact through technology and
        community-driven initiatives. Let&apos;s build something amazing
        together!
      </Text>
    </MotionBox>
  );
};

export default Content;
