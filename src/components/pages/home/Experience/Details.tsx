import {
  Box,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaHive } from "react-icons/fa";

type CompanyProps = {
  org: string;
  role: string;
  link: string;
  date: string;
  content: Array<string>;
};

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Role = styled.h2`
  font-family: Catamaran, sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  text-align: start;
  color: #e2e8f0;
  background-color: #1a202c;
  padding: 0 5px;
  border-radius: 4px;

  @media (max-width: 911px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const Org = styled.h2`
  font-family: Catamaran, sans-serif;
  font-size: 24px;
  font-weight: bolder;
  line-height: 26px;
  text-align: start;
  color: #808080;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 911px) {
    font-size: 22px;
    margin-left: 10px;
  }
  @media (max-width: 911px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Details = ({ ...company }: CompanyProps) => {
  return (
    <Container>
      <Flex justifyContent="flex-start" alignItems="center">
        <Role>{company.role}</Role>
        <Link href={company.link}>
          <Org>{`@${company.org}`}</Org>
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
    </Container>
  );
};

export default Details;
