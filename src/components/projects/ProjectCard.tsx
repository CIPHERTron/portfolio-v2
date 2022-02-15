/* eslint-disable react/no-array-index-key */
import { HStack, Button, Link, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLock, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 7%;

  @media (max-width: 500px) {
    margin-top: 15%;
  }
`;

const TabBar = styled.div`
  background-color: #7b61ff;
  height: 25px;
  border-radius: 18px 18px 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;

  .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 7px 4px;
  }

  .red {
    background-color: #c94645;
  }

  .yellow {
    background-color: #e4c36e;
  }

  .green {
    background-color: #89cf8d;
  }
`;

const WebsiteUrl = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-left: -100px;
  color: #fff;

  .icon {
    height: 12px;
    margin-right: 4px;
  }

  @media (max-width: 500px) {
    margin-left: -80px;
  }
`;

const Screen = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 0 0 18px 18px;
  padding: 200px auto !important;
  padding-bottom: 12px;
`;

const ProjectHeading = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 36px;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const PreviewImage = styled.img`
  height: 350px;
  width: 80%;
  margin: 0 auto;
  object-fit: cover;
  padding: 0px;
  margin-bottom: 15px;
  border: 2px solid #fff;
  border-radius: 8px;

  @media (max-width: 800px) {
    height: 200px;
    width: 95%;
  }
`;

const Description = styled.div`
  height: fit-content;
  margin: 0 auto;
  width: 90%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 40px -20px;

  .info-icon {
    font-size: 30px;
    color: #7b61ff;
    margin-right: 12px;
  }

  .project-description {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 95%;
    align-items: start;
    .project-description {
      font-size: 12px;
    }

    .info-icon {
      font-size: 28px;
      margin-right: 12px;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px auto;
`;

const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .tech-item {
    margin: auto 10px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: #808080;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

type ProjectCardProps = {
  name: string;
  desc: string;
  github: string;
  demo: string;
  preview: string;
  tech: Array<string>;
};

function ProjectCard({
  name,
  desc,
  github,
  demo,
  preview,
  tech,
}: ProjectCardProps) {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <TabBar>
        <DotContainer>
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </DotContainer>
        <WebsiteUrl>
          <span className="icon">
            <FaLock />
          </span>
          <span className="url">pritishsamal.com</span>
        </WebsiteUrl>
        <span />
      </TabBar>
      <Screen
        style={
          colorMode === "dark"
            ? { backgroundColor: "#22223B" }
            : { backgroundColor: "#edf1ff" }
        }
      >
        <ProjectHeading>{name}</ProjectHeading>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 0.9 }}
          style={{ cursor: "pointer" }}
        >
          <PreviewImage src={preview} alt={name} />
        </motion.div>
        <Description
          style={
            colorMode === "dark"
              ? { backgroundColor: "#edf1ff", color: "#22223B" }
              : { backgroundColor: "#22223B", color: "#edf1ff" }
          }
        >
          <span className="info-icon">
            <BsFillInfoCircleFill />
          </span>
          <span className="project-description">{desc}</span>
        </Description>

        <IconsWrapper>
          <HStack>
            <Link href={github} isExternal>
              <Button
                colorScheme="facebook"
                leftIcon={<FaGithub />}
                variant="outline"
              >
                GitHub
              </Button>
            </Link>

            <Link href={demo} isExternal>
              <Button
                colorScheme="facebook"
                leftIcon={<FaExternalLinkAlt />}
                variant="outline"
              >
                Live
              </Button>
            </Link>
          </HStack>
        </IconsWrapper>

        <StackWrapper>
          {tech.map((item, idx) => (
            <span className="tech-item" key={idx}>
              {item}
            </span>
          ))}
        </StackWrapper>
      </Screen>
    </Container>
  );
}

export default ProjectCard;
