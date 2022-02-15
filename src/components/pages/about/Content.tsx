import type { BoxProps } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

const textProps: BoxProps = {
  marginY: 4,
  fontSize: [18, 22],
  textAlign: "justify",
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
        Hello! This is Pritish Samal, a prefinal year student from National
        Institute of Technology, Rourkela 🇮🇳 majoring in Ceramic Engineering.
        I&apos;m a Full Stack Developer having experience in MERN Stack, Flask
        and frameworks like Nextjs & Gatsby. I&apos;m also a huge cloud &
        open-source enthusiast who believes in the power of community. Writing
        clean code is and will always be a top priority for me.
      </Text>

      <Text {...textProps}>
        The recent outbreak of the global pandemic, which led to the lockdown,
        has made me a typical computer nerd. So, you&apos;ll rarely find me AFK.
        When I&apos;m not coding, I&apos;ll be busy organising or participating
        in Hackathons, involved in community programs, hosting or attending
        seminars & workshops, writing blogs and solving doubt & mentoring
        students. I also love outdoor sports like football & basketball and have
        a knack of mobile photography.
      </Text>
    </MotionBox>
  );
};

export default Content;
