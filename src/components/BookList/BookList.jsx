import React from "react";
import { useGlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import style from "./BookList.module.css";
// import ReactPaginate from "react-paginate"

const BookList = () => {

  let { books, favorite, AddToFavorite, removeFromFavorite } =
    useGlobalContext();
  

  const navigate = useNavigate();

  //* Favorite Checker
  const favoritesChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };


  return (
    <div className={`row container  m-auto my-5 ${style.book_item}`}>
      {books.map((book, index) => (
        <div className=" col-md-3 container book">
          <div className={`${style.book_item_img}`}>
            <img
              onClick={() => navigate(`/books/${book.id}`)}
              className="w-100 my-5 "
              src={book.image_url}
              alt="cover img"
            />
          </div>
          <div className={`text-center  ${style.book_item_info}`}>
            <div>
              <Link to={`/books/${book.id}`} style={{ color: "aliceblue" }}>
                <span> {book.title.slice(0, 20)}...</span>
              </Link>

              <div className={`py-2 ${style.book_info_author}`}>
                <span
                  className="text-capitalize "
                  style={{ color: "sandybrown" }}
                  
                >
                  Author:
                </span>
                <span className="px-2">{book.author}</span>
              </div>
              <div>
                {favoritesChecker(book.id) ? (
                  <button
                    onClick={() => removeFromFavorite(book.id)}
                    className="btn btn-primary my-3"
                  >
                    {" "}
                    Remove From Favorites
                  </button>
                ) : (
                  <button
                    onClick={() => AddToFavorite(book)}
                    className="btn btn-primary my-4"
                  
                    style={{ color: "aliceblue" }}
                  >
                    {" "}
                    Add To Favorites
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/*  <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={50}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
  
      /> */}
     
    </div>
  );
};

export default BookList;
