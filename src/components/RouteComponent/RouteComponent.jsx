import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "../Link/Link";
import { Nav } from "../Nav/Nav";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "../Form/Form";
import { Loder } from "../Loder/Loder";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ListPoster } from "../ListPoster/ListPoster";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import ReactPaginate from "react-paginate";
import "./routecomponent.css";

import { ListItem } from "../ListItem/ListItem";

import { ACTIONS } from "../../redux/constants";

export const RouteComponent = () => {
  const dispatch = useDispatch();
  const [onclickOmdb, setOnclickOmdb] = useState("");
  const [onclickWachLater, setOnclickWachLater] = useState("");
  const [onclickSearch, setOnclickSearch] = useState("");
  const [onclickLogin, setonclickLogin] = useState("");
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
    dispatch({ type: ACTIONS.GET_VIDEO_REQUEST });
  }, []);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_VIDEO_OMDB_REQUEST });
  }, []);

  const onClickOmdb = () => {
    setOnclickOmdb(true);
    setTimeout(() => setOnclickOmdb(false), 1000);
    setShowOmd(true);
    setShowForm(false);
  };
  const onClickWachLater = () => {
    setOnclickWachLater(true);
    setTimeout(() => setOnclickWachLater(false), 1000);
  };
  const onClickSearch = () => {
    setOnclickSearch(true);
    setTimeout(() => setOnclickSearch(false), 1000);
    setShowForm(true);
    setShowOmd(false);
  };
  const onClickLogin = () => {
    setonclickLogin(true);
    setTimeout(() => setonclickLogin(false), 1000);
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
          onClick={onClickWachLater}
          className={
            onclickWachLater === ""
              ? "link animate__animated  animate__fadeInRightBig animate__fast"
              : onclickWachLater
              ? "link animate__animated animate__bounceIn"
              : "link "
          }
        >
          Will watch later
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
        <Link
          onClick={onClickLogin}
          className={
            onclickLogin === ""
              ? "link animate__animated animate__animated animate__fadeInUpBig "
              : onclickLogin
              ? "link animate__animated animate__bounceIn"
              : "link "
          }
        >
          Log in
        </Link>
      </Nav>

      {showOmd || showForm ? <Form /> : ""}
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

            // breakLabel={}
          ></ReactPaginate>
        </>
      ) : (
        <h3 style={{ color: "#ccc", textAlign: "center" }}>
          {state.searchOmdbhReducer.request?.Error}
        </h3>
      )}
      {showForm ? <ListItem /> : ""}
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

      <Nav className="nav_bottom">
        <Link className="link animate__animated animate__fadeInDownBig">
          Log in
        </Link>
        <Link className="link animate__animated animate__fadeInLeftBig">
          Serch video
        </Link>
        <Link className="link animate__animated animate__fadeInLeftBig animate__fast">
          Will watch later
        </Link>
        <Link className="link animate__animated animate__fadeInLeftBig animate__faster">
          Search movie on OMDb
        </Link>
      </Nav>
    </>
  );
};
