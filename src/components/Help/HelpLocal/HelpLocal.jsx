import React, { useState } from "react";
import { Title } from "../styled/Description.styled";
import { List, ListItemsWrap, Row, ListItem } from "../styled/List.styled";
import { Pagination } from "../Pagination/Pagination";

import data from "../../../data/data.json";

export const HelpLocal = () => {
  const [posts] = useState(data.local.organisations);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Title>{data.local.desc}</Title>
      <List>
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
      </List>
      {posts.length <= 3 ? null : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
