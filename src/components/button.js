import styled from "styled-components";
import select from "../utils/select.js";
import Link from "./link.js";

export default styled.button.attrs(({ href }) => ({
  ...(href && { as: Link })
}))`
  background: ${select("theme.buttonBg")};
  border-radius: 4px;
  border: none;
  color: ${select("theme.buttonColor")};
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em;
  text-decoration: none;

  &:hover {
    background: ${select("theme.buttonBg")}99;
  }
`;
