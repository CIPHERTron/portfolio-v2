import {
  Box,
  Heading,
  Image,
  Link,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  margin: 0 auto;
  width: 270px;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

type VolunteeringProps = {
  por: string;
  org: string;
  icon: string;
  link: string;
};

function VolunteerCard({ por, org, icon, link }: VolunteeringProps) {
  const { colorMode } = useColorMode();

  return (
    <Wrapper
      style={
        colorMode === "dark"
          ? { backgroundColor: "#22223B" }
          : { backgroundColor: "#ECF0FE" }
      }
    >
      <Link _hover={{ textDecoration: "none" }} href={link} isExternal>
        <Flex justifyContent="flex-start" alignItems="center">
          <Image
            mr={[5, 3]}
            objectFit="cover"
            boxSize="30px"
            alt={por}
            src={icon}
          />
          <div>
            <Heading size="md">{por}</Heading>
            <Text fontSize="sm">{org}</Text>
          </div>
        </Flex>
      </Link>
    </Wrapper>
  );
}

export default VolunteerCard;
