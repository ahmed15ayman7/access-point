import React from "react";
import ReactPaginate from "react-paginate";
import { Like2Play } from "../../../assets/audios/SoundPlay";
import "./PagenationStyle.css";

function PagenationPages(props) {
  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination justify-content-center "}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => props.handlePageClick(e)}
        onClick={() => Like2Play()}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(props.Pagination)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default PagenationPages;
