import React, { createContext, useContext, useReducer } from "react";
import uuid from "uuid/v4";
const NAME_SPACE = "book-list";

// get bookList from persisence layer
const initialBookList = JSON.parse(localStorage.getItem(NAME_SPACE)) || {};
const ADD_BOOK = "ADD_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const PERSIST_LIST = "PERSIST_LIST";

const reducer = (state, { type, data }) => {
  switch (type) {
    case ADD_BOOK: {
      const id = uuid();
      return {
        ...state,
        [id]: { ...data, id }
      };
    }
    case UPDATE_BOOK: {
      return data.id
        ? {
            ...state,
            [data.id]: data
          }
        : state;
    }
    case REMOVE_BOOK: {
      const { [data]: _, ...books } = state;
      return data ? books : state;
    }
    case PERSIST_LIST: {
      localStorage.setItem(NAME_SPACE, JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

export const BookListContext = createContext({
  bookList: initialBookList,
  actions: {}
});

export default () => useContext(BookListContext);

export const BookListContextProvider = ({ children }) => {
  const [bookList, send] = useReducer(reducer, initialBookList);
  const dispatch = action => {
    send(action);
    send({ type: PERSIST_LIST });
  };
  const actions = {
    add: book => dispatch({ type: ADD_BOOK, data: book }),
    update: book => dispatch({ type: UPDATE_BOOK, data: book }),
    remove: id => dispatch({ type: REMOVE_BOOK, data: id })
  };
  return (
    <BookListContext.Provider value={[bookList, actions]}>
      {children}
    </BookListContext.Provider>
  );
};
