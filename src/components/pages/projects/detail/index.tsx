import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { PSOgImage } from "utils/PSOgImage";

import type { ProjectDetailProps } from "./types";

const ProjectDetail = ({ projectData }: ProjectDetailProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <NextSeo
        title={projectData.title}
        canonical={`${baseUrl}/projects/${projectData.id}`}
        openGraph={{
          title: `${projectData.title} | Pritish`,
          images: [
            {
              url: PSOgImage(projectData.title),
              alt: `${projectData.title} | Pritish og-image`,
            },
          ],
        }}
      />

      <Box as="article">
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

        <ProjectDetailWrapper
          source="Project Detail"
          projectData={projectData}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetail;
