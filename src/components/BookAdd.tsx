import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { addNewBook, updateBook } from "src/store/reducers/bookSlice";
import { useTypedSelector, useAppDispatch } from "src/store";
import { useRouter } from "next/dist/client/router";

const BookList: FC = () => {
  const router = useRouter();
  const id = router.query.id.toString();

  const dispatch = useAppDispatch();
  const book = useTypedSelector((state) =>
    state.book.bookList.find((book) => book.id === id),
  );

  const [title, setTitle] = useState<string | undefined>(book?.title || "");
  const [author, setAuthor] = useState<string | undefined>(book?.author || "");

  const handleOnSubmit = () => {
    if (id) {
      editBook();
      return;
    }
    dispatch(addNewBook({ author, title, id: uuidv4() }));
    clearInputs();
  };

  const editBook = () => {
    if (id) {
      dispatch(updateBook({ author, title, id }));
      clearInputs();
      router.push("/");
    }
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
  };

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
          <Heading color="white" data-testid="header">
            {id ? "Update Book" : "Add Book"}
          </Heading>
        </Box>
        <FormLabel color="white">Title</FormLabel>
        <input
          value={title}
          color="white"
          placeholder="The Lord of the Rings"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <FormLabel color="white" marginTop={4}>
          Author
        </FormLabel>
        <input
          value={author}
          color="white"
          placeholder="J.R.R Tolkien"
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />
        <Button
          marginTop={4}
          colorScheme="teal"
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default BookList;
