import { Button, Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      p={4}
      mx="auto"
      maxWidth="1150px"
    >
      <Box>
        <Link href="/">
          <a>
            <Button
              fontWeight={["medium", "medium", "medium"]}
              fontSize={["xs", "sm", "lg", "xl"]}
              variant="ghost"
              _hover={{ bg: "rgba(0,0,0,.2)" }}
              padding="1"
              color="white"
              letterSpacing="0.65px"
            >
              <Text fontSize={["xl", "2xl", "2xl", "2xl"]} mr={2}>
                🦉
              </Text>
              Library App
            </Button>
          </a>
        </Link>
      </Box>

      <Box>
        <Link href="/">
          <a>
            <Button
              fontWeight={["medium", "medium", "medium"]}
              fontSize={["xs", "sm", "lg", "xl"]}
              variant="ghost"
              _hover={{ bg: "rgba(0,0,0,.2)" }}
              p={[1, 4]}
              color="white"
            >
              List Books
            </Button>
          </a>
          {/* https://codesandbox.io/s/reduxtoolkit-typescript-test-mp4zo */}
        </Link>
        <Link href="/book/add">
          <a>
            <Button
              fontWeight={["medium", "medium", "medium"]}
              fontSize={["xs", "sm", "lg", "xl"]}
              variant="ghost"
              _hover={{ bg: "rgba(0,0,0,.2)" }}
              p={[1, 4]}
              color="white"
            >
              Add Book
            </Button>
          </a>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
