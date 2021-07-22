import { useState } from "react";
import styled from "styled-components";

import { COLORS, FONTS } from "@/styles/constants";
import { CloseIcon } from "../Icons";

interface ExplanationProps {
  show: boolean;
}

const Explanation = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <Wrapper show={show}>
      <p>
        This is a clone of{" "}
        <a href="https://bejamas.io" target="_blank" rel="noreferrer">
          Bejamas'
        </a>{" "}
        home page.
      </p>
      <p>
        I created this to hone my front end development skills. I wrote{" "}
        <a
          href="https://www.cyishere.dev/blog/what-ive-learned-from-being-a-copycat"
          target="_blank"
          rel="noreferrer"
        >
          a blog post about this
        </a>
        .
      </p>

      <CloseThis type="button" onClick={handleClick}>
        <CloseIcon />
      </CloseThis>
    </Wrapper>
  );
};

const Wrapper = styled.div<ExplanationProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${COLORS.yellowLight};
  color: ${COLORS.yellowDark};
  font-size: ${FONTS.small};
  padding: 0.5rem 1rem;
  width: calc(100% - 2rem);
  text-align: center;
  border-top: 1px solid ${COLORS.yellowDark};
  position: fixed;
  left: 0;
  bottom: 0;
`;

const CloseThis = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  color: ${COLORS.yellowDark};
  cursor: pointer;
`;

export default Explanation;
