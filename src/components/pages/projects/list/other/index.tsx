import {
  Box,
  Button,
  Grid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import type { OtherProjectsProps } from "./types";

const OtherProjects = ({ otherProjects }: OtherProjectsProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <>
      <NextSeo
        title="Projects - Other"
        canonical={`${baseUrl}/projects/other`}
        openGraph={{
          title: "Projects by Pritish",
          images: [
            {
              url: PSOgImage("Projects"),
              alt: "Other Projects | Pritish og-image",
            },
          ],
        }}
      />

      <Link href="/projects" passHref>
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          size="sm"
          backgroundColor={buttonColor}
          marginBottom={22}
        >
          projects
        </Button>
      </Link>

      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Other Projects
        </Heading>
      </Box>

      <Grid
        gap={8}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      >
        {otherProjects.map((projectData) => (
          <ProjectDetailWrapper
            projectData={projectData}
            source="Other Projects"
            key={projectData.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default OtherProjects;
