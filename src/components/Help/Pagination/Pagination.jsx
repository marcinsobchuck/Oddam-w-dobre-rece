import React from "react";
import { PagesList, Page } from "../Pagination/Pagination.styled";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PagesList>
      {pageNumbers.map((number) => (
        <Page
          active={number === currentPage}
          key={number}
          onClick={(event) => paginate(number, event)}
        >
          {number}
        </Page>
      ))}
    </PagesList>
  );
};
