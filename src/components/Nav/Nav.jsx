import "./nav.css"
import { useDispatch } from "react-redux"
import {ACTIONS} from "../../redux/constants"
import { useEffect } from "react"
export const Nav = ({children, className}) => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch({type: ACTIONS.GET_VIDEO_REQUEST})
    // },[])


    return <ol className={className}>{children}</ol>
}
