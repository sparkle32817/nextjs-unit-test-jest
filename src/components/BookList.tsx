import React, { FC } from "react";
import Link from "next/link";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import BookInfo from "./BookInfo";
import { useTypedSelector } from "src/store";

const BookList: FC = () => {
  const bookList = useTypedSelector((state) => state.book.bookList);
  console.log(bookList);
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="50%">
        <Box
          d="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading color="white">Book List</Heading>
          <Link href="/book/add">
            <a>Add a book</a>
          </Link>
        </Box>
        <Box rounded="md" bg="purple.500" color="white" px="15px" py="15px">
          <Stack spacing={8}>
            {bookList.map((book) => (
              <BookInfo
                key={book.id}
                title={book.title}
                author={book.author}
                id={book.id}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default BookList;
