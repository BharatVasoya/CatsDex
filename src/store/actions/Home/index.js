import {
  CHANGE_TEXT,
  HOME_WATCHER,
  HOME_FAILURE,
  HOME_SUCCESS,
} from "../../constants";

export function homeWatcher(payload, resolve, reject) {
  return { type: HOME_WATCHER, payload, resolve, reject };
}

export function homeSuccess(payload) {
  return { type: HOME_SUCCESS, payload: payload };
}

export function homeError(error) {
  return { type: HOME_FAILURE, payload: error };
}
