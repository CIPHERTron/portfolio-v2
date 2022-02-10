import { Button, Grid } from "@chakra-ui/react";
import Link from "next/link";

const ProjectListBottomNav = () => {
  return (
    <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
      <Link href="/projects/other" passHref>
        <Button variant="outline" isFullWidth>
          Other Projects
        </Button>
      </Link>
    </Grid>
  );
};

export default ProjectListBottomNav;
