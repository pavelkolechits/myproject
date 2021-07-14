import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';


import { useSelector,useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './redux/store';



import {ACTIONS} from "./redux/constants"
import {RouteComponent} from "./components/RouteComponent/RouteComponent"



function App() {
return(
	<Provider store={store}>
	<RouteComponent/>
	</Provider>
)



	// const [onclickOmdb, setOnclickOmdb] = useState('');
	// const [onclickWachLater, setOnclickWachLater] = useState('');
	// const [onclickSearch, setOnclickSearch] = useState('');
	// const [onclickLogin, setonclickLogin] = useState('');
	// const [showForm, setShowForm] = useState(false);
	// const [showVideo, setShowVideo] = useState(false)

	

	


	// const onClickOmdb = () => {
	// 	setOnclickOmdb(true);
	// 	setTimeout(() => setOnclickOmdb(false), 1000);
	// };
	// const onClickWachLater = () => {
	// 	setOnclickWachLater(true);
	// 	setTimeout(() => setOnclickWachLater(false), 1000);
	// };
	// const onClickSearch = () => {
	// 	setOnclickSearch(true);
	// 	setTimeout(() => setOnclickSearch(false), 1000);
	// 	setShowForm(true);
	// };
	// const onClickLogin = () => {
	// 	setonclickLogin(true);
	// 	setTimeout(() => setonclickLogin(false), 1000);
	// };

	// return (
	// 	<>
	// 		<Provider store={store}>

	// 			<Nav className="nav_top">
	// 				<Link
	// 					onClick={onClickOmdb}
	// 					className={
	// 						onclickOmdb === ''
	// 							? 'link animate__animated animate__animated animate__fadeInRightBig animate__faster'
	// 							: onclickOmdb
	// 							? 'link animate__animated animate__bounceIn'
	// 							: 'link '
	// 					}
	// 				>
	// 					Search movie on OMDb
	// 				</Link>
	// 				<Link
	// 					onClick={onClickWachLater}
	// 					className={
	// 						onclickWachLater === ''
	// 							? 'link animate__animated  animate__fadeInRightBig animate__fast'
	// 							: onclickWachLater
	// 							? 'link animate__animated animate__bounceIn'
	// 							: 'link '
	// 					}
	// 				>
	// 					Will watch later
	// 				</Link>
	// 				<Link
	// 					onClick={onClickSearch}
	// 					className={
	// 						onclickSearch === ''
	// 							? 'link animate__animated animate__animated animate__fadeInRightBig '
	// 							: onclickSearch
	// 							? 'link animate__animated animate__bounceIn'
	// 							: 'link '
	// 					}
	// 				>
	// 					Serch video
	// 				</Link>
	// 				<Link
	// 					onClick={onClickLogin}
	// 					className={
	// 						onclickLogin === ''
	// 							? 'link animate__animated animate__animated animate__fadeInUpBig '
	// 							: onclickLogin
	// 							? 'link animate__animated animate__bounceIn'
	// 							: 'link '
	// 					}
	// 				>
	// 					Log in
	// 				</Link>
	// 			</Nav>
	// 			{showForm ? <Form /> : ''}
	// 			<Loder/>
	// 			{showForm ? <ListItem /> : ''}
	// 			<RouteComponets/>

	// 			<Nav className="nav_bottom">
	// 				<Link className="link animate__animated animate__fadeInDownBig">Log in</Link>
	// 				<Link className="link animate__animated animate__fadeInLeftBig">Serch video</Link>
	// 				<Link className="link animate__animated animate__fadeInLeftBig animate__fast">
	// 					Will watch later
	// 				</Link>
	// 				<Link className="link animate__animated animate__fadeInLeftBig animate__faster">
	// 					Search movie on OMDb
	// 				</Link>
	// 			</Nav>
	// 		</Provider>
	// 	</>
	// );
}
export default App;
