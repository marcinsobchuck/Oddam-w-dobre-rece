import React from "react";
import { ListItemWrapper } from "./ListItem.styled";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const ListItem = ({
  shouldRedirect,
  name,
  section,
  offset,
  page,
  onClick,
  isMenuListItem,
  hasYellowBorder,
}) => {
  return (
    <ListItemWrapper
      isMenuListItem={isMenuListItem}
      hasYellowBorder={hasYellowBorder}
    >
      {shouldRedirect ? (
        <Link to={page} onClick={onClick}>
          {name}
        </Link>
      ) : (
        <LinkScroll to={section} smooth duration={1000} offset={offset}>
          {name}
        </LinkScroll>
      )}
    </ListItemWrapper>
  );
};
