import { Form } from "../Form/Form"
import { ListItemYouTube } from "../ListItemYouTube/ListItemYouTube"
import { useSelector, useDispatch } from "react-redux"
import {Loder} from "../Loder/Loder"
import { ACTIONS } from "../../redux/constants"
import { useState } from "react"

export const SearchYouTube = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
  
    const onChangeForm = (event) => {
      setText(event.target.value);
    };
  
    const clickButton = () => {
      dispatch({ type: ACTIONS.GET_INPUT_VALUE, text });
    };
    const state = useSelector(state => state)
    return (
        <>
        <Form onClick={clickButton} onChange={onChangeForm}/>
        {state.searchReducer?.video ? <ListItemYouTube /> : <Loder/>}
        </>
    )
}