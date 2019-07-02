import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import useBookList from "./hooks/use-book-list.js";

export default () => {
  const addBook = () => {};
  const [bookList, actions] = useBookList();
  const [title, setTitle] = useState("");

  return (
    <Fragment>
      <h1>Reading List</h1>
      {Object.values(bookList).map(({ title, id }) => (
        <p key={JSON.stringify({ title, id })}>
          {title} [{id}]
        </p>
      ))}
      <label>
        <span>Book title</span>
        <input
          name="title"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </label>

      <button
        onClick={() => {
          actions.add({ title });
          setTitle("");
        }}
      >
        Add a book
      </button>
    </Fragment>
  );
};
