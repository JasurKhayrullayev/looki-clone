import Hero from '../../components/Hero/Hero'
import Brand from '../../components/Brand/Brand'
import Products from '../../components/Products/Products'
// import homeStyle from "../home/Home.module.css";
// import lip from "../../assets/lip.png";
// import { useCallback, useEffect, useState , useNavigate } from "react";
// import axios from 'axios';
// import StarRating from "../../components/StarRating/StarRating";
// import { useLocation } from "react-router-dom";
// import Loading from "../../components/Loading/Loading";

const Home=()=>{
//     const [loading, setLoading] = useState(false);
//     const [allBooks, setAllBooks] = useState([]);
//     const [allBooksData, setAllBooksData] = useState([]);
//     const isLoggedIn = localStorage.getItem("emailData");
//     const nav = useNavigate();
//     if (!isLoggedIn) {
//         nav("/login");
//     }

//   let location = useLocation();

//   const url = new URLSearchParams(location.search);
//   const pageNumber = +url.get("page") || 1;
//     useEffect(() => {
//         setLoading(true);
//         axios
//           .get("https://exam5-fad81-default-rtdb.firebaseio.com/.json")
//           .then(({ data }) => {
//             console.log(data);
//             const newData = Object.keys(data).map((item) => {
//               return {
//                 ...data[item],
//                 id: item,
//               };
//             });
//             let starCount = pageNumber * 2 - 2;
//             const arrey = newData.slice(starCount, starCount + 2);
    
//             setAllBooks(arrey);
//             setAllBooksData(newData);
//           })
//           .catch((error) => {
//             console.log(error);
//           })
//           .finally(() => {
//             setLoading(false);
//           });
//       }, [pageNumber]);

      
//     const deleteHandler = (id) => {
//         console.log(id);
//         axios
//         .delete(
//             `https://exam5-fad81-default-rtdb.firebaseio.com/${id}.json`
//         )
//         .then((res) => {
//             window.location.reload(false);
//         });
//     };

    return(
        <div>
            <Hero/>
            <Products/>
                {/* <div className={homeStyle["bookList-list-wrap"]}>
                <ul className={homeStyle["bookList-list"]}>
                  {loading && <Loading />}
                  {!allBooks.length && !loading && (
                    <h1 className={homeStyle["no-content"]}>
                      No Content
                    </h1>
                  )}
                  {allBooks.map((books) => (
                    <li
                      key={books.id}
                      className={homeStyle["bookList-item"]}
                    >
                      <div className={homeStyle["bookList-img-wrap"]}>
                        <img
                          className={homeStyle["bookList-img"]}
                          src={lip}
                          alt=""
                        />
                      </div>
                      <div className={homeStyle["bookList-content-wrap"]}>
                        <div className={homeStyle["bookList-texts-wrap"]}>
                          <p className={homeStyle["bookList-texts1"]}>
                            {books.bookTitle}
                          </p>
                          <p className={homeStyle["bookList-texts2"]}>
                            <span
                              className={homeStyle["bookList-publisher"]}
                            >
                              by
                            </span>
                            {"  "}
                            {books.authorRef}
                            <span
                              className={homeStyle["bookList-publisher"]}
                            >
                              , {books.publisherRef}
                            </span>
                            {" || "}
                            <span>{books.pusblishedRef}</span>
                            <span className={homeStyle["bookList-star"]}>
                              <StarRating/>
                            </span>
                          </p>
                          <p className={homeStyle["bookList-publisher"]}>
                            Cost:{"  "}
                            <span className={homeStyle["bookList-cost"]}>
                              ${books.costref}
                            </span>
                          </p>
                          <p className={homeStyle["bookList-texts4"]}></p>
                          <div className={homeStyle["bookList-bnt-wrap"]}>
                            <button
                              className={homeStyle["bookList-delete"]}
                              onClick={deleteHandler.bind(undefined, books.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                </div> */}
            <Brand/>
        </div>
    )
}
export default Home;