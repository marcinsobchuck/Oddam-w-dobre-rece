import React, { useState } from "react";
import { List } from "../List/List";
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
      <List currentPosts={currentPosts} description={data.local.desc} />
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
