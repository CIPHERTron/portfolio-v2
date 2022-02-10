import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaHive } from "react-icons/fa";

type CompanyProps = {
  org: string;
  role: string;
  link: string;
  date: string;
  content: Array<string>;
};

const Details = ({ ...company }: CompanyProps) => {
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  return (
    <Box>
      <Flex justifyContent="flex-start" alignItems="center">
        <Heading size={isSmallerThan500 ? "sm" : "lg"}>{company.role}</Heading>
        <Link href={company.link}>
          <Heading
            textDecoration="underline"
            color="GrayText"
            size="md"
            cursor="pointer"
            ml={3}
          >{`@${company.org}`}</Heading>
        </Link>
      </Flex>
      <Text>{company.date}</Text>
      <List spacing={3} mt={3}>
        {company.content.map((item) => {
          return (
            <ListItem key={item}>
              <ListIcon as={FaHive} color="green.500" />
              {item}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Details;
