/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaYoutube, FaLayerGroup } from "react-icons/fa";

type SessionProps = {
  title: string;
  desc: string;
  image: string;
  rec: string;
  date: string;
  slides: string;
};

const Container = styled(Box)`
  height: fit-content;
  width: 100%;
  cursor: pointer;
  background-image: radial-gradient(
    circle farthest-corner at 83.7% 4.3%,
    rgba(173, 0, 171, 1) 0%,
    rgba(15, 51, 92, 1) 90%
  );
  border-radius: 15px;
  transition: transform 1s ease-in-out;

  .active {
    background-color: #d8dede;
    background-image: linear-gradient(315deg, #d8dede 0%, #e5bdf6 74%);
    height: fit-content;
    max-height: fit-content;
    width: 100%;
    cursor: pointer;
    border-radius: 15px;
    transition: transform 1s ease-in-out;
  }

  &:hover {
    transform: scale(1.01);
  }

  .poster {
    img {
      height: 360px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px 0 0 15px;
    }
  }

  @media (max-width: 500px) {
    .poster {
      img {
        border-radius: 15px 15px 0 0;
      }
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 3fr;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

function SessionComponent({
  title,
  desc,
  image,
  rec,
  date,
  slides,
}: SessionProps) {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <ContentGrid className={colorMode === "light" ? "active" : ""}>
        <div className="poster">
          <img src={image} alt={title} />
        </div>
        <Box mt={3} padding="10px">
          <Heading size="xl">{title}</Heading>
          <Text fontSize="sm" mb={5}>
            {date}
          </Text>
          <Text mb={5}>{desc}</Text>

          <Stack mb={5} direction="row" spacing={4}>
            <Link href={rec} isExternal _hover={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FaYoutube />}
                colorScheme="purple"
                variant="solid"
              >
                Watch
              </Button>
            </Link>

            <Link href={slides} isExternal _hover={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FaLayerGroup />}
                colorScheme="purple"
                variant="outline"
              >
                Slides
              </Button>
            </Link>
          </Stack>
        </Box>
      </ContentGrid>
    </Container>
  );
}

export default SessionComponent;
