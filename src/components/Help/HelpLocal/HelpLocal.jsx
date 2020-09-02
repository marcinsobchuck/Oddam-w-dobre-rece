import React from "react";
import { Title } from "../styled/Description.styled";
import { List, ListItemsWrap, Row, ListItem } from "../styled/List.styled";
import data from "../../../data/data.json";

export const HelpLocal = () => {
  return (
    <>
      <Title>{data.local.desc}</Title>
      <List>
        {data.local.organisations.map((el) => {
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
      </List>
    </>
  );
};
