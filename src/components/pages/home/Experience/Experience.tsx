import { Heading, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

import { experience } from "../../../../config/experience";

import Details from "./Details";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin: 40px auto;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Orgs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Exp = styled.div``;

const TabContainer = styled.div`
  backround-color: #1a202c;
  height: 30px;
  cursor: pointer;
  padding: 20px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #5d6a84;
  border-radius: 6px;
  margin-bottom: 10px;
  border: none;
  transition: all 0.5s ease-in-out;

  @media (max-width: 500px) {
    justify-content: center;
    margin-bottom: 0;
  }

  &:hover {
    background-color: #112240;
    color: #fff;
    border: 2px solid #5d6a84;
  }
`;

function Experience() {
  const [company, setCompany] = useState(experience[0]);
  const tabBg = useColorModeValue("#ade8f4", "#112240");
  const tabColor = useColorModeValue("#000", "#fff");

  return (
    <>
      <Heading size="lg" marginBottom={2}>
        Work Experience
      </Heading>
      <Wrapper>
        <Orgs>
          {experience.map((item) => (
            <TabContainer
              style={
                item.org === company.org
                  ? {
                      backgroundColor: tabBg,
                      color: tabColor,
                      border: "2px solid #5d6a84",
                    }
                  : {}
              }
              id={item.org}
              key={item.org}
              onClick={() => setCompany(item)}
            >
              <h1>{item.org}</h1>
            </TabContainer>
          ))}
        </Orgs>
        <Exp>
          <Details
            role={company.role}
            org={company.org}
            link={company.link}
            date={company.date}
            content={company.content}
          />
        </Exp>
      </Wrapper>
    </>
  );
}

export default Experience;
