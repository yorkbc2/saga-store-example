import {
	call,
	put,
	takeLatest
} from "redux-saga/effects";
import axios from "axios";

function fetchData () {
	return axios({
		method: "get",
		url: "https://jsonplaceholder.typicode.com/users"
	})
}

function* sagaWorker () {
	try {
		const response = yield call(fetchData);
		yield put({type: "API_REQUEST_END", payload: response.data});
	} catch (e) {
		yield put({type: "API_REQEUST_ERROR", payload: e});
	}
}

function* saga () {
	yield takeLatest("API_REQUEST_START", sagaWorker);
}

export default saga;