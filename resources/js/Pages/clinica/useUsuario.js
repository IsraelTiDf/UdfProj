import { useEffect, useCallback, useReducer } from "react";
import client from "@/api/client";

const initialState = {
  pedidos: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        error: "",
        loading: false,
        pedidos: action.pedidos,
      };

    case "FETCH_ERROR":
      return {
        error: action.error,
        loading: false,
        pedidos: [],
      };
    default:
      return state;
  }
};

export default function useUsuario() {
//   const [state, dispatch] = useReducer(reducer, initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  const editar = useCallback((formData) => {
    dispatch({ type: "LOADING" });

    const url = `/view/clinicas`;
    // const params = pickBy(formData, identify);

    const onError = (err) => {
      let error = "Um erro aconteceu";

      if (err.response && err.response.status === 422) {
        error = Object.values(err.response.data.errors);
      }

      dispatch({ type: "ERROR", error });
    };

    const onSuccess = ({ data: { data: result } }) => {
      dispatch({ type: "SUCCESS", result });
    };

    return client.get(url).then(onSuccess, onError);
  }, []);

  return [state, dispatch, editar];

//   return state;
}
