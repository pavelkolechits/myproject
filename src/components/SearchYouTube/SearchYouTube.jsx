import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { Form } from "../Form/Form";
import { Loader } from "../Loader/Loader";
import { ACTIONS } from "../../redux/constants";
import { ListItemYouTube } from "../ListItemYouTube/ListItemYouTube";

export const SearchYouTube = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onChangeForm = (event) => {
    setText(event.target.value);
  };
  const clickButton = () => {
    dispatch({ type: ACTIONS.GET_INPUT_VALUE, text });
  };
  const state = useSelector((state) => state);
  return (
    <>
      <Form onClick={clickButton} onChange={onChangeForm} />
      {state.searchReducer?.video ? <ListItemYouTube /> : <Loader />}
    </>
  );
};
