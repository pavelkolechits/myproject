import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CustomLink } from "../Link/Link";
import { Nav } from "../Nav/Nav";
import { useState } from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { DetailsModal } from "../DetailsModal/DetailsModal";

import "./routecomponent.css";

import { ACTIONS } from "../../redux/constants";
import { SearchOmdb } from "../SearchOmdb/SearchOmdb";
import { SearchYouTube } from "../SearchYouTube/SearchYouTube";

export const RouteComponent = () => {
  const dispatch = useDispatch();
  const [onclickOmdb, setOnclickOmdb] = useState("");
  const [onclickSearch, setOnclickSearch] = useState("");

  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_VIDEO_OMDB_REQUEST });
  }, []);
  const onClickOmdb = () => {
    setOnclickOmdb(true);
    setTimeout(() => setOnclickOmdb(false), 1000);
  };

  const onClickSearch = () => {
    setOnclickSearch(true);
    setTimeout(() => setOnclickSearch(false), 1000);
  };

  return (
    <>
      <Router>
        <Nav className="nav_top">
          <CustomLink
            onClick={onClickOmdb}
            className={
              onclickOmdb === ""
                ? "link animate__animated animate__animated animate__fadeInRightBig animate__faster"
                : onclickOmdb
                ? "link animate__animated animate__bounceIn"
                : "link "
            }
          >
            <Link className="route_link"  to="/movie">
              Search movie on OMDb
            </Link>
          </CustomLink>
          <CustomLink
            onClick={onClickSearch}
            className={
              onclickSearch === ""
                ? "link animate__animated animate__animated animate__fadeInRightBig animate__fast "
                : onclickSearch
                ? "link animate__animated animate__bounceIn"
                : "link "
            }
          >
            <Link className="route_link"
              
              to="/youtube"
            >
              Search video
            </Link>
          </CustomLink>
        </Nav>

        <Route path="/movie">
          <SearchOmdb />
        </Route>

        <Switch>
          <Route path="/youtube">
            <SearchYouTube />
          </Route>
        </Switch>
      </Router>

      {state.searchOmdbhReducer.details ? <DetailsModal /> : ""}
    </>
  );
};
