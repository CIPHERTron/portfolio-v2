import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { volunteering } from "config/volunteering";

import VolunteerCard from "./VolunteerCard";

const VolunteerExperienceWrapper = styled(Box)`
  margin: 15% auto;
  margin-bottom: 22px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function VolunteerExperience() {
  return (
    <VolunteerExperienceWrapper marginBottom={10} marginTop="15%">
      <Heading size="lg" mb={5}>
        Volunteer Experience
      </Heading>

      <StyledGrid>
        {volunteering.map((item) => (
          <VolunteerCard
            key={item.org}
            por={item.por}
            org={item.org}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </StyledGrid>
    </VolunteerExperienceWrapper>
  );
}

export default VolunteerExperience;
