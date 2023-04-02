import React from "react";
import { Button, StyledReactPaginate } from "./Pagination.styles";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <StyledReactPaginate
      previousLabel={<Button>Previous</Button>}
      nextLabel={<Button>Next</Button>}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="style-list"
      nextClassName=""
      onPageChange={(data) => setPageNumber(data.selected + 1)}
      pageCount={info?.pages}
    ></StyledReactPaginate>
  );
};

export default Pagination;
