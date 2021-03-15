import React, { useState } from "react";
import { List } from "../List/List";
import { Pagination } from "../Pagination/Pagination";
import data from "../../../data/data.json";

export const HelpFoundations = () => {
  const [posts] = useState(data.foundations.organisations);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <List currentPosts={currentPosts} description={data.foundations.desc} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
