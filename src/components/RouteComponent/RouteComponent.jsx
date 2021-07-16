import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "../Link/Link";
import { Nav } from "../Nav/Nav";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "../Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { ListPoster } from "../ListPoster/ListPoster";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import ReactPaginate from "react-paginate";
import "./routecomponent.css";
import { ListItemYouTube } from "../ListItemYouTube/ListItemYouTube";
import { ACTIONS } from "../../redux/constants";

export const RouteComponent = () => {
  const dispatch = useDispatch();
  const [onclickOmdb, setOnclickOmdb] = useState("");
  const [onclickSearch, setOnclickSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showOmd, setShowOmd] = useState(false);
  const [nextpage, setNextPage] = useState(false);
  const state = useSelector((state) => state);
  const text = useSelector((state) => state.searchOmdbhReducer.value);
  const showAnyPage = (event) => {
    let page = event.selected + 1;
    dispatch({ type: ACTIONS.GET_VIDEO_OMDB_PAGINATION, page, text });
    setNextPage(true);
  };
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_VIDEO_OMDB_REQUEST });
  }, []);
  const onClickOmdb = () => {
    setOnclickOmdb(true);
    setTimeout(() => setOnclickOmdb(false), 1000);
    setShowOmd(true);
    setShowForm(false);
  };

  const onClickSearch = () => {
    setOnclickSearch(true);
    setTimeout(() => setOnclickSearch(false), 1000);
    setShowForm(true);
    setShowOmd(false);
  };

  return (
    <>
      <Nav className="nav_top">
        <Link
          onClick={onClickOmdb}
          className={
            onclickOmdb === ""
              ? "link animate__animated animate__animated animate__fadeInRightBig animate__faster"
              : onclickOmdb
              ? "link animate__animated animate__bounceIn"
              : "link "
          }
        >
          Search movie on OMDb
        </Link>
        <Link
          onClick={onClickSearch}
          className={
            onclickSearch === ""
              ? "link animate__animated animate__animated animate__fadeInRightBig "
              : onclickSearch
              ? "link animate__animated animate__bounceIn"
              : "link "
          }
        >
          Serch video
        </Link>
      </Nav>

      {showOmd || showForm ? <Form showForm={showForm} /> : ""}
      {showOmd && !state.searchOmdbhReducer.request?.Error ? (
        <>
          <ReactPaginate
            activeLinkClassName="dis"
            disabledClassName="dis"
            previousLabel={<button className="previos">&lt;</button>}
            nextLabel={<button className="previos">&gt;</button>}
            onPageChange={showAnyPage}
            nextClassName="previos"
            previousClassName="previos"
            pageClassName="li_each_page"
            containerClassName="li_cont animate__animated animate__backInDown  animate__faster"
            breakLinkClassName="li_link"
            breakClassName="li_page"
            pageRangeDisplayed={3}
            pageCount={Math.ceil(
              state.searchOmdbhReducer.request.totalResults / 10
            )}
          ></ReactPaginate>
        </>
      ) : (
        <h3 style={{ color: "#ccc", textAlign: "center" }}>
          {state.searchOmdbhReducer.request?.Error}
        </h3>
      )}
      {showForm && state.searchReducer?.video ? <ListItemYouTube /> : ""}
      {showOmd ? (
        <ListPoster
          className={
            "posters animate__animated animate__backInLeft  animate__faster"
          }
        />
      ) : (
        ""
      )}
      {state.searchOmdbhReducer.details ? <DetailsModal /> : ""}
    </>
  );
};
