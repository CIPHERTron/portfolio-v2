import { Box, Heading, Text, Stack } from "@chakra-ui/react";

import { sessions } from "config/sessions";

import SessionComponent from "./SessionComponent";

function SessionsPage() {
  return (
    <Box>
      <Heading size="xl" marginY={5}>
        Talks & Sessions 🎤
      </Heading>
      <Text fontSize="lg" mb={3}>
        Public Speaking has always been tough for me. I tend to get nervous when
        asked to present to a large group of people. In small groups, I&apos;ll
        be the first one to stand up and present. But put me in front of a big
        group and I can get flustered.
      </Text>

      <Text fontSize="lg" mb={9}>
        Lately I&apos;ve been working on my public speaking skills by stepping
        out of my comfort zone and presenting in-front of a large audience by
        delivering sessions & workshops. Below are some examples. Do check them
        out.
      </Text>

      <Stack spacing={10}>
        {sessions.map((item) => (
          <SessionComponent
            key={item.title}
            title={item.title}
            desc={item.desc}
            image={item.image}
            rec={item.rec}
            date={item.date}
            slides={item.slides}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default SessionsPage;
