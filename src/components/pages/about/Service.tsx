import { Box, Text, Heading, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MdApi } from "react-icons/md";

const items = [
  "Full Stack Development",
  "Cloud Computing",
  "Problem Solving",
  "Technical Writing",
];

const Container = styled(Box)`
  min-width: 350px;
  // width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin: 3% auto;

  .icon {
    padding: 15px;
    background: #319795;
    border-radius: 10px;
    margin-right: 10px;
    color: #fff;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

type ServiceProps = {
  label: string;
};

function ServiceComponent({ label }: ServiceProps) {
  const { colorMode } = useColorMode();
  return (
    <Container bgColor={colorMode === "dark" ? "#2F3061" : "#FCDDF2"}>
      <div className="icon">
        <MdApi size={25} />
      </div>
      <Text fontSize="xl" fontWeight="extrabold">
        {label}
      </Text>
    </Container>
  );
}

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Service = () => {
  return (
    <>
      <Heading mt={9} fontSize="3xl" fontWeight="extrabold">
        My Interests lies in:
      </Heading>
      <Grid>
        {items.map((item) => (
          <ServiceComponent key={item} label={item} />
        ))}
      </Grid>
    </>
  );
};

export default Service;
