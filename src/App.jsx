import './App.css'
import Registro from './components/Registros';

const registros = [
  {
    "_id": 1,
    "paraclinicos": "Frecuencia cardiaca: 80 bpm, Frecuencia respiratoria: 18 rpm, Temperatura: 37.2°C",
    "evolucion": "El paciente se encuentra estable. Continuar con el tratamiento actual.",
    "procedimiento_id": 1,
    "medicamento_id": [
      "2, 4, 8"
    ],
    "evento_id": 17,
    "personal_id": "4826109375",
    "especialidad": "Enfermería",
    "fecha": {
      "$date": "2022-06-22T05:00:00.000Z"
    }
  },
  {
    "_id": 2,
    "paraclinicos": "Frecuencia cardiaca: 75 bpm, Frecuencia respiratoria: 20 rpm, Temperatura: 36.8°C",
    "evolucion": "El paciente presenta mejoría en los síntomas. Seguir monitoreando.",
    "procedimiento_id": 2,
    "medicamento_id": [
      "10"
    ],
    "evento_id": 1,
    "personal_id": "29876543210",
    "especialidad": "Enfermería",
    "fecha": {
      "$date": "2023-10-03T05:00:00.000Z"
    }
  },
  {
    "_id": 3,
    "paraclinicos": "Ecografía abdominal sin novedades.",
    "evolucion": "Se ha iniciado un nuevo tratamiento. Paciente en observación.",
    "procedimiento_id": 3,
    "medicamento_id": [
      "2"
    ],
    "evento_id": 2,
    "personal_id": "2468135790",
    "especialidad": "Gastroenterología",
    "fecha": {
      "$date": "2023-09-17T05:00:00.000Z"
    }
  },
]

function App() {
  return registros.map((registro) => (<Registro key={registro._id} registro={registro} />))
}

export default App
