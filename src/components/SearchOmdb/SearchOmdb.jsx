import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import "./search.css";
import { Form } from "../Form/Form";
import { ListPoster } from "../ListPoster/ListPoster";
import { ACTIONS } from "../../redux/constants";

export const SearchOmdb = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChangeForm = (event) => {
    setText(event.target.value);
  };
  const clickButton = () => {
    dispatch({ type: ACTIONS.GET_INPUT_VALUE_OMDB, text });
    console.log(text);
  };
  const textValue = useSelector((state) => state.searchOmdbhReducer.value);
  const showAnyPage = (event) => {
    let page = event.selected + 1;
    dispatch({ type: ACTIONS.GET_VIDEO_OMDB_PAGINATION, page, textValue });
  };
  const state = useSelector((state) => state);
  return (
    <>
      {!state.searchOmdbhReducer.request?.Error ? (
        <>
          <Form onClick={clickButton} onChange={onChangeForm} />
          <ReactPaginate
            activeLinkClassName="activeLinkClassName"
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
              state.searchOmdbhReducer.request?.totalResults / 10
            )}
          ></ReactPaginate>
        </>
      ) : (
        <>
          <Form onClick={clickButton} onChange={onChangeForm} />
          <h3 style={{ color: "#ccc", textAlign: "center" }}>
            {state.searchOmdbhReducer.request.Error}
          </h3>
        </>
      )}
      <ListPoster
        className={
          "posters animate__animated animate__backInLeft  animate__faster"
        }
      />
    </>
  );
};
