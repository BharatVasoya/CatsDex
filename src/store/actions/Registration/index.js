import {
  Registration_WATCHER,
  Registration_FAILURE,
  Registration_SUCCESS,
} from "../../constants";
import { REGISTRATION_DATA_CHANGED } from "../../actions/types";

export function registrationDataChanged(payload) {
  return { type: REGISTRATION_DATA_CHANGED, payload };
}

export function registrationWatcher(payload, resolve, reject) {
  return { type: Registration_WATCHER, payload, resolve, reject };
}

export function registrationSuccess(payload) {
  return { type: Registration_SUCCESS, payload: payload };
}

export function registrationError(error) {
  return { type: Registration_FAILURE, payload: error };
}
