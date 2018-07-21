import React from "react";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from({ length: pagesCount }, (x, i) => i + 1);

  if (pagesCount === 1) return null;

  return (
    <ul>
      {pages.map(page => {
        return (
          <li key={page}>
            <a onClick={() => onPageChange(page)} style={{ cursor: "pointer" }}>
              {page === currentPage ? (
                <span style={{ fontWeight: "bold" }}>{page}</span>
              ) : (
                page
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
