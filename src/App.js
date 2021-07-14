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





}
export default App;
