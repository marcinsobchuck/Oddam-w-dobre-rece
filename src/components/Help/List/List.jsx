import React from "react";
import {
  ListWrapper,
  Row,
  ListItem,
  ListItemsWrap,
  Title,
} from "./List.styled";

export const List = ({ currentPosts, description }) => {
  return (
    <>
      <Title>{description}</Title>
      <ListWrapper>
        {currentPosts.map((el) => {
          return (
            <Row key={el.id}>
              <ListItemsWrap>
                <ListItem rowTitle>{el.name}</ListItem>
                <ListItem>{el.orgDesc}</ListItem>
              </ListItemsWrap>
              <ListItem centered>{el.things}</ListItem>
            </Row>
          );
        })}
      </ListWrapper>
    </>
  );
};
