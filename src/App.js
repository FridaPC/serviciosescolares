import logo from './logo.svg';
import './App.css';

function App() {
  return (import React from 'react';
import Database from 'react-data-table-component';

const tablaUniversidad =[
    {id:1, nombre:'Andrea Castellanos Ruiz', matricula: 147689, semestre: 3},
    {id:2, nombre:'Jose Gomez Perez', matricula: 142578, semestre: 5},
    {id:3, nombre:'Rocio Santos Cabrera', matricula: 142463, semestre: 2},
    {id:4, nombre:'Frida Pablos Cabrera', matricula: 149752, semestre: 1},
    {id:5, nombre:'Abraham Concha Amaya', matricula: 148532, semestre: 8},
    {id:6, nombre:'Francisco Hernandez Guzman', matricula: 140382, semestre: 2},
    {id:7, nombre:'Rolando Guzman Guzman', matricula: 47266, semestre: 6},
    {id:8, nombre:'Karla Jimenez Morales', matricula: 142848, semestre: 3},
    {id:9, nombre:'Edgar Hernandez Ugarte', matricula: 145828, semestre: 6},
    {id:10, nombre:'Leonardo Pinelo Cortes', matricula: 14536, semestre: 1},

]

const columnas = [
    {name: 'ID',
    selector:'id',
    sortable: true
    },

    {name: 'NOMBRE',
    selector:'nombre',
    sortable: true
    },

    {name: 'MATRICULA',
    selector:'matricula',
    sortable: true
    },

    {name: 'SEMESTRE',
    selector:'semestre',
    sortable: true,
    right: true
    },
]

function App() {
    return (
        <div>
            <DataTable
            columns={columnas}
            data={tablaUniversidad}
            title="Tabla de alumnado Derecho UABJO"
            pagination
            fixedHeader
            fixedHeaderScrollHeight='600px'
            />
        </div>

    );
}

export default App;
