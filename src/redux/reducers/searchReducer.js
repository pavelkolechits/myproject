import { ACTIONS } from '../constants';

const defState = {
	
	error: "OOps...",
	value:""
}
export function searchReducer(state = defState, action) {
	switch (action.type) {
		case ACTIONS.GET_INPUT_VALUE: {
			return { ...state, value: action.text };
		}
        case ACTIONS.GET_VIDEO_SUCCESS: {

            return {...state,  video: action.video} 
        }
		case ACTIONS.GET_VIDEO_FAILED: {
			return {...state,  error: action.error.masage} 
		}
		default:
			return {...state};
	}
}
