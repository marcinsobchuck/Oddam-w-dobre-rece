import React from "react";
import styled from "styled-components";

export const Hamburger = ({ onClick }) => {
  return <HamburgerIcon onClick={onClick} />;
};

const HamburgerIcon = styled.div`
  ::after {
    font-size: 36px;
    position: absolute;
    left: 5%;
    top: 35px;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f0c9";
    cursor: pointer;
  }
`;
