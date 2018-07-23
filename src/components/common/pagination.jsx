import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from({ length: pagesCount }, (x, i) => i + 1);

  if (pagesCount === 1) return null;

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li key={page}>
          <a onClick={() => onPageChange(page)}>
            {page === currentPage ? (
              <span style={{ fontWeight: "bold" }}>{page}</span>
            ) : (
              page
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
