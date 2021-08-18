import {
  registrationWatcher,
  registrationSuccess,
  registrationError,
} from "../../actions";
import { REGISTRATION_DATA_CHANGED } from "../../actions/types";
const initialState = {
  error: null,
  registrationLoader: false,
  registrationData: [],
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_DATA_CHANGED: {
      return {
        ...state,
        registrationData: action.payload,
      };
    }
    case registrationWatcher: {
      return {
        ...state,
        registrationLoader: true,
      };
    }
    case registrationSuccess: {
      return {
        ...state,
        error: null,
        registrationData: action.payload,
        registrationLoader: false,
      };
    }
    case registrationError: {
      return {
        ...state,
        error: action,
        registrationLoader: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default registrationReducer;
