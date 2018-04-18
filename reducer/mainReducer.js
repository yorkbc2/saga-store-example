import {
	API_REQUEST_START,
	API_REQUEST_END,
	API_REQUEST_ERROR
} from "./../consts"

const initialState = {
	fetched: false,
	fetching: false,
	error: null,
	data: []
}

export default function reducer (state=initialState, action) {
	switch (action.type) {
		case API_REQUEST_START: {
			return {...state, fetching: true};
		}
		case API_REQUEST_END: {
			return {...state, fetching: false, fetched: true, data: action.payload};
		}
		case API_REQUEST_ERROR: {
			return {...state, fetched: false, fetching: false, error: action.payload};
		}
		default: {
			return state;
		}
	}
}