import {
  CHANGE_TEXT,
  DETAILS_WATCHER,
  DETAILS_FAILURE,
  DETAILS_SUCCESS,
} from "../../constants";

export function changeText(payload, index) {
  return { type: CHANGE_TEXT, payload, index };
}
export function detailsWatcher(payload, resolve, reject) {
  return { type: DETAILS_WATCHER, payload, resolve, reject };
}

export function detailsSuccess(payload) {
  return { type: DETAILS_SUCCESS, payload: payload };
}

export function detailsError(error) {
  return { type: DETAILS_FAILURE, payload: error };
}
