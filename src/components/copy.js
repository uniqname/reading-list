import styled from "styled-components";

export default styled.p`
  opacity: ${({ variant }) => (variant === "deemphasize" ? 0.75 : 1)};
  font-size: ${({ size }) => (size === "small" ? 0.8 : 1)}em;
`;
