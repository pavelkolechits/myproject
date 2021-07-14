import "./item.css"
import YouTube  from "react-youtube"


export const Item = ({videoId}) => {

    return <YouTube className='player ' videoId ={videoId}/>
   
}

