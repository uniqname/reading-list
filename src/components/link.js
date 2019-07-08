import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled.a.attrs(({ target }) => ({
  ...(!target && { as: Link })
}))``;
