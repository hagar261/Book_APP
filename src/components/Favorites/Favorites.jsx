import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import style from "./Favorites.module.css";

const Favorites = () => {
  let { favorite, AddToFavorite, removeFromFavorite } = useGlobalContext();
  console.log(favorite);

  const favoritesChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <div
        className={`favorites row container  m-auto my-5 ${style.book_item}`}
      >
        {favorite.length > 0 ? (
          favorite.map((book, index) => (
            <div className=" col-md-3 container book">
              <div className={`${style.book_item_img}`}>
                <img
                  className="w-100 my-5 "
                  src={book.image_url}
                  alt="cover img"
                />
              </div>
              <div className={`text-center  ${style.book_item_info}`}>
                <div>
                  <Link to={`/books/${book.id}`}>
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
                      >
                        {" "}
                        Add To Favorites
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 style={{ color: "sandybrown" }}>
            You don't have any favorites books yet!!
          </h1>
        )}
      </div>
    </>
  );
};

export default Favorites;
