import React, { useState, useEffect } from 'react';
// import './App.css';
import { forwardRef } from 'react';
// import Avatar from 'react-avatar';
import {Grid} from '@mui/material'
import MaterialTable from "material-table";
import {MedicalServices,FilterList,FirstPage,LastPage,Remove,SaveAlt,Search,Edit,DeleteOutline,Clear,ChevronRight,ChevronLeft,ArrowDownward,AddBox,ViewColumn,Check,} from '@mui/icons-material/';
// import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@mui/lab/Alert';
// import MaterialTable from "material-table";
// @mui/material/
// @mui/icons-material/
import { ThemeProvider, createTheme, Box,Button } from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { Head } from '@inertiajs/inertia-react';
import Crud from '../Components/Crud.jsx';
import EditarInteressadoModal from './EditarDados';
import EditarUser from './EditarUser';





const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  medic: forwardRef((props, ref) => <MedicalServices {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const defaultMaterialTheme = createTheme();

const api = axios.create({
//   baseURL: `https://reqres.in/api`
})


function validateEmail(email){
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}

export default function Dashboard(props, auth) {
console.log(props.usuario);

const modalEditarInteressadoDefault = {
    open: false,
    interessado: {
        id: 0,
        id_area: 0,
        name: "",
        cpf: "",
        email: "",
        dt_nascimento: "",
        telefone: "",
    },
};
const [modalEditarInteressado, setModalEditarInteressado] = useState(
    modalEditarInteressadoDefault
);

const handleModalEditarClose = () =>
    setModalEditarInteressado(modalEditarInteressadoDefault);

const handleEditarClick = (interessado) => {
    setModalEditarInteressado({
        interessado,
        open: true,
    });
};

const admin = props.auth.user.flg_admin;

  var columns = [
    {title: "id", field: "id", hidden: true},
    // {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.first_name} />  },
    {title: "nome", field: "name"},
    {title: "cpf", field: "cpf", editable: 'never'},
    {title: "email", field: "email"},
    {title: "telefone", field: "telefone"},
    {title: "Data de nascimento", field: "dt_nascimento",editable: 'never'}
  ]
//   const [data, setData] = useState([]); //table data
// data = props.usuario;
  const data = props.usuario;
  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

//   useEffect(() => {
//     api.get(route('editar-usuario'))
//         .then(res => {
//             setData(res.data.data)
//          })
//          .catch(error=>{
//              console.log("Error")
//          })
//   }, [])

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    console.log(newData);
    if(newData.name === ""){
      errorList.push("Inserir o Nome")
    }
    if(newData.cpf === ""){
      errorList.push("Inserir o CPF")
    }
    if(newData.email === "" || validateEmail(newData.email) === false){
      errorList.push("Inserir o Email")
    }

    // if(errorList.length < 1){
    api.put(`/editar-usuario/${newData.id}`,newData)
    window.location.reload()


  }

//   const handleRowAdd = (newData, resolve) => {
//     //validation
//     let errorList = []
//     if(newData.name === undefined){
//       errorList.push("Please enter first name")
//     }
//     if(newData.cpf === undefined){
//       errorList.push("Please enter last name")
//     }
//     if(newData.email === undefined || validateEmail(newData.email) === false){
//       errorList.push("Please enter a valid email")
//     }

//     if(errorList.length < 1){ //no error
//       api.post(`/delete-clinica/${newData.id}`)
//       .then(res => {
//         let dataToAdd = [...data];
//         dataToAdd.push(newData);
//         setData(dataToAdd);
//         resolve()
//         setErrorMessages([])
//         setIserror(false)
//       })
//       .catch(error => {
//         setErrorMessages(["Cannot add data. Server error!"])
//         setIserror(true)
//         resolve()
//       })
//     }else{
//       setErrorMessages(errorList)
//       setIserror(true)
//       resolve()
//     }


//   }

  const handleRowDelete = (oldData, resolve) => {

    axios.delete(`/deletar-usuario/${oldData.id}`)
    window.location.reload()

  }

  if(admin != 1){
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div>
                    {/* {admin && (
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Area Usuario
                    </NavLink>
                    <NavLink href={route('usuarios')} active={route().current('usuarios')}>
                        Clinicas
                    </NavLink>
                </div>
            )} */}
                    {/* {!admin === 1 && ( */}
                        {/* <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Area Usuario
                        </NavLink> */}
                    {/* )} */}
                </div>

            }

        >
            <Head title="Dashboard" />
            {/*
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                </div>
            </div> */}
            {/* <Grid> */}

            <Crud value={props.auth.user} onEditarClick={handleEditarClick} />
            {/* </Grid> */}
            {/* <EditarInteressadoModal
                formValues={{
                    nome: modalEditarInteressado.interessado.name,
                    cpf: modalEditarInteressado.interessado.cpf || "",
                    email: modalEditarInteressado.interessado.email || "",
                    dt_nascimento: modalEditarInteressado.interessado.dt_nascimento || "",
                    telefone: modalEditarInteressado.interessado.telefone || "",
                }}
                interessadoId={modalEditarInteressado.interessado.id}
                onClose={handleModalEditarClose}
                open={modalEditarInteressado.open}
            // dispatch={dispatch}
            // dispatch={dispatch}
            /> */}
            <EditarUser
                formValues={{
                    nome: modalEditarInteressado.interessado.name,
                    cpf: modalEditarInteressado.interessado.cpf || "",
                    email: modalEditarInteressado.interessado.email || "",
                    dt_nascimento: modalEditarInteressado.interessado.dt_nascimento || "",
                    telefone: modalEditarInteressado.interessado.telefone || "",
                }}
                interessadoId={modalEditarInteressado.interessado.id}
                onClose={handleModalEditarClose}
                open={modalEditarInteressado.open}
            // dispatch={dispatch}
            // dispatch={dispatch}
            />

        </AuthenticatedLayout>
    );

  }else{

      return (
        // <div className="App">
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<div>
        {/* <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Area Usuario
        </NavLink>
        <NavLink href={route('usuarios')} active={route().current('usuarios')}>
            Clinicas
        </NavLink> */}
    </div>}
        >
          <Grid container spacing={1}>
              <Grid item xs={3}></Grid>
              <Grid item xs={12} sm={12} lg={6} sx={{ mt: 5 }}>
              <div>
                {iserror &&
                  <Alert severity="error">
                      {errorMessages.map((msg, i) => {
                          return <div key={i}>{msg}</div>
                      })}
                  </Alert>
                }
              </div>
              <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                  title="Pacientes"
                  columns={columns}
                  data={data}
                  icons={tableIcons}
                  localization={{
                    body: {
                      emptyDataSourceMessage: 'Nenhum registro para exibir',
                      filterRow: {
                        filterTooltip: 'Filtro'
                        },
                        editRow :{
                            deleteText: 'Tem certeza que deseja excluir esta linha?'
                        },
                        deleteTooltip : 'Deletar',
                        editTooltip  :'Editar'
                    },
                    header: {
                        actions: 'Ações'
                    },
                    toolbar: {
                      searchTooltip: 'Pesquisar',
                      searchPlaceholder: 'Pesquisar'
                    },
                    pagination: {
                      labelRowsPerPage:'Linhas por página',
                      labelRowsSelect: 'linhas',
                      labelDisplayedRows: '{count} de {from}-{to}',
                      firstTooltip: 'Primeira página',
                      previousTooltip: 'Página anterior',
                      nextTooltip: 'Próxima página',
                      lastTooltip: 'Última página'
                    }
                  }}
                options={{
                    actionsColumnIndex: -1
                  }}
                  editable={{
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                          handleRowUpdate(newData, oldData, resolve);

                      }),
                    // onRowAdd: (newData) =>
                    //   new Promise((resolve) => {
                    //     handleRowAdd(newData, resolve)
                    //   }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                        handleRowDelete(oldData, resolve)
                      }),
                  }}
                /></ThemeProvider>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            </AuthenticatedLayout>
        // </div>
      );
  }
}

