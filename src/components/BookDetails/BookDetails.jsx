import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./BookDetails.module.css";
const BOOK_DETAILS_URL = "https://example-data.draftbit.com/books/";

const BookDetails = () => {
  let [book, setBook] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getBookDetails() {
      try {
        const response = await fetch(`${BOOK_DETAILS_URL}/${id}`);
        const data = await response.json();
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBookDetails();
  }, [id]);

  return (
    <div className={`row  container ${style.book_details}`}>
      <div className={` col-md-3 container ${style.book_details_img}`}>
        <Link to={"/book"} className="btn btn-primary my-3 " type="button">
          <i class="fa-solid fa-arrow-left-long"></i>
          <span className="px-2">Go Back</span>
        </Link>
        <img className="w-100 my-5 " src={book?.image_url} alt="cover img" />
      </div>

      <div className="col-md-4 container d-flex">
        <div
          className="d-flex align-items-center"
          style={{ color: "aliceblue" }}
        >
          <div>
            <h2>{book?.title}</h2>
            <span className="text-capitalize " style={{ color: "sandybrown" }}>
              Author:
            </span>
            <span className="px-2 ">{book?.authors}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
