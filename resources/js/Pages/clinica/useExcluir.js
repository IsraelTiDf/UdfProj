import { useCallback,useReducer,useEffect } from "react";
import { useSnackbar } from "notistack";
import client from "@/api/client";
import useModalRecuder from "@/Layouts/useModalReducer";

// export default function useEditar() {
//   const [state, dispatch] = useModalRecuder();
// //   const { enqueueSnackbar } = useSnackbar();

//   const editar = useCallback(
//     (clinicaId) => {
//       dispatch({ type: "LOADING" });

//       const url = `/delete-clinica/${clinicaId}`;

//       const onError = (err) => {
//         let error = "Um erro aconteceu";

//         if (err.response && err.response.status === 422) {
//           error = Object.values(err.response.data.errors);
//         }

//         dispatch({ type: "ERROR", error });
//       };

//       const onSuccess = () => {
//         // enqueueSnackbar("Dados alterados");

//         // closeModal();
//       };

//       return client.post(url).then(onSuccess, onError);
//     },
//     [dispatch
//         // , enqueueSnackbar
//     ]
//   );

//   return [state, editar];



export default function useExcluir() {

const { enqueueSnackbar } = useSnackbar();
const [state, dispatch] = useReducer();
  const excluir = (clinicaId) => {
    dispatch({ type: "LOADING" });
    // const url = `/delete-clinica/${clinicaId}`;

      const onSuccess = ({ data: { data: data } }) =>

        dispatch({ type: "SUCCESS" });
        return client
        .post(`/delete-clinica/${clinicaId}`)
        .then(onSuccess)
        .enqueueSnackbar("Dados Excluidos");


    };
    return [state, excluir ,enqueueSnackbar];

//   export default useEditar;
}
