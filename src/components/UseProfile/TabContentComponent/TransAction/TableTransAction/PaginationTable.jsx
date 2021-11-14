import { Pagination } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { useMemo } from 'react';
const PaginationTable = ({ total = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange }) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(6);
  }, [total, itemsPerPage]);



  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pages;
  }, [totalPages, currentPage]);

  if (totalPages === 0) return null;

  return (
    <div>
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}

export default PaginationTable;
