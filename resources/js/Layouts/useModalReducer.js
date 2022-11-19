import { useReducer } from "react";

const initialState = {
  error: null,
  loading: false,
  open: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ERROR": {
      return {
        error: action.error,
        loading: false,
        open: true,
      };
    }

    case "LOADING": {
      return {
        error: null,
        loading: true,
        open: true,
      };
    }

    case "MODAL_OPENED": {
      return {
        error: null,
        loading: false,
        open: true,
      };
    }

    case "MODAL_CLOSED": {
      return {
        error: null,
        loading: false,
        open: false,
      };
    }

    default:
      return state;
  }
};

export default function useModalReducer() {
  return useReducer(reducer, initialState);
}
