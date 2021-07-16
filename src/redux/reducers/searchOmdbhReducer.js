import { ACTIONS } from '../constants';

const defState = {
	value: '',
	details: false
};
export function searchOmdbhReducer(state = defState, action) {
	switch (action.type) {
		case ACTIONS.GET_VIDEO_OMDB_SUCCESS: {
			console.log(action)
			return { ...state, request: action.request };
		}
		case ACTIONS.GET_INPUT_VALUE_OMDB: {
			return {...state, value: action.text}
		}
		case ACTIONS.GET_OMDB_ID: {
		return	{...state, id: action.id}
		}
		case ACTIONS.GET_ALL_ABOUT_FILM: {
			return {...state, allInfo: action.allInfo}
		}
		case ACTIONS.SHOW_DETAILS: {
			return {...state, details: true}
		}
		case ACTIONS.CLOSE_MODAL: {
			return {...state, details: false}
		}
		case ACTIONS.GET_VIDEO_OMDB_PAGINATION_SUCCESS: {
		
			return {...state, request: action.request}
		}
		default:
			return { ...state };
	}
}
