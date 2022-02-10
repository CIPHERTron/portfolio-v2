import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

import Card from "components/projects/Card";
import type { ProjectType } from "models/project";

export type ProjectsSectionProps = { data: Array<ProjectType> };

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const router = useRouter();

  React.useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Stack as="section" marginBottom={16} spacing={4}>
      <Link href="/projects" passHref>
        <Heading as="h1" size="lg" cursor="pointer" marginBottom={2}>
          Projects
        </Heading>
      </Link>

      <Grid
        gap={8}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginY={8}
      >
        {data
          .filter(
            (unfilteredProject) =>
              unfilteredProject.highlight && unfilteredProject
          )
          .map((project) => (
            <Card project={project} key={project.id} />
          ))}
      </Grid>

      <Box>
        <Link href="/projects" passHref>
          <Button
            as="a"
            rightIcon={<FaArrowRight />}
            paddingX={0}
            variant="ghost"
            fontFamily="heading"
          >
            view all projects
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default ProjectsSection;
