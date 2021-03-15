import React, { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { List } from "../List/List";
import data from "../../../data/data.json";

export const HelpOrganisations = () => {
  const [posts] = useState(data.organisations.organisations);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <List currentPosts={currentPosts} description={data.organisations.desc} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
