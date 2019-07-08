import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import useBookList from "./hooks/use-book-list.js";
import Copy from "./components/copy.js";
import Header from "./components/header.js";
import Button from "./components/button.js";
import Book, { Footer } from "./components/book.js";
import Link from "./components/link.js";

export default () => {
  const addBook = () => {};
  const [bookList, { add, remove, update }] = useBookList();
  const [title, setTitle] = useState("");

  return (
    <Fragment>
      <Header>Reading List</Header>
      {Object.values(bookList).map(({ title, id, read }) => (
        <Book key={JSON.stringify({ title, id })}>
          <Copy>{title}</Copy>
          <Copy size="small" variant="deemphasize">
            {id}
          </Copy>
          <Footer>
            <Button
              target="_blank"
              href={`https://www.amazon.com/s?k=${title.replace(
                /\s/g,
                "+"
              )}&i=stripbooks`}
            >
              Get it
            </Button>
            <Button onClick={() => update({ title, id, read: !read })}>
              Read it
            </Button>
            <Button onClick={() => remove(id)}>Delete it</Button>
          </Footer>
        </Book>
      ))}
      <label>
        <span>Book title</span>
        <input
          name="title"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </label>

      <Button
        onClick={() => {
          add({ title });
          setTitle("");
        }}
      >
        Add a book
      </Button>
    </Fragment>
  );
};
