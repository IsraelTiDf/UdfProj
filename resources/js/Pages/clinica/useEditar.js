import { useCallback } from "react";
// import { useSnackbar } from "notistack";
import client from "@/api/client";
import useModalRecuder from "@/Layouts/useModalReducer";

export default function useEditar() {
  const [state, dispatch] = useModalRecuder();
//   const { enqueueSnackbar } = useSnackbar();

  const editar = useCallback(
    (interessadoId, formData, resultDispatch, closeModal) => {
      dispatch({ type: "LOADING" });

      const url = `/editar-usuario/${interessadoId}`;

      const onError = (err) => {
        let error = "Um erro aconteceu";

        if (err.response && err.response.status === 422) {
          error = Object.values(err.response.data.errors);
        }

        dispatch({ type: "ERROR", error });
      };

      const onSuccess = () => {
        // enqueueSnackbar("Dados alterados");
        resultDispatch({
          type: "UPDATE_INTERESSADO",
          ...formData,
          interessadoId,
        });
        dispatch({ type: "MODAL_CLOSED" });
        closeModal();
      };

      return client.post(url, formData).then(onSuccess, onError);
    },
    [dispatch
        // , enqueueSnackbar
    ]
  );

  return [state, editar];
}
