import Registro from "../components/Registro";
import { useState } from "react";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
const registros = [
    {
        "_id": 1,
        "paraclinicos": "Frecuencia cardiaca: 80 bpm, Frecuencia respiratoria: 18 rpm, Temperatura: 37.2°C",
        "evolucion": "El paciente se encuentra estable. Continuar con el tratamiento actual.",
        "procedimiento": {
            "_id": 1,
            "nombre": "Extracción de sangre",
            "descripcion": "Proceso para recoger una muestra de sangre para análisis médicos."
        },
        "medicamento":
        {
            "_id": 2,
            "nombre": "Ibuprofeno",
            "dosis": "400 mg",
            "via": "Oral",
            "frecuencia_dia": 3,
            "duracion_dias": 5,
            "observaciones": "No exceder la dosis recomendada"
        },
        "personal": {
            "_id": 10,
            "tipo_id": "Cedula",
            "nombre": "Pedro Jesús Giraldo",
            "email": "jesusg@gmail.com",
            "doc_identidad": "4826109375",
            "cargo": "Enfermero",
            "foto": "https://randomuser.me/api/portraits/men/78.jpg"
        },
        "especialidad": "Enfermería",
        "fecha": {
            "$date": "2022-06-22T05:00:00.000Z"
        }
    },
    {
        "_id": 2,
        "paraclinicos": "Frecuencia cardiaca: 75 bpm, Frecuencia respiratoria: 20 rpm, Temperatura: 36.8°C",
        "evolucion": "El paciente presenta mejoría en los síntomas. Seguir monitoreando.",
        "procedimiento": {
            "_id": 2,
            "nombre": "Radiografía de tórax",
            "descripcion": "Obtención de imágenes de los pulmones y el corazón mediante radiación."
        },
        "medicamento":
        {
            "_id": 10,
            "nombre": "Diazepam",
            "dosis": "5 mg",
            "via": "Oral",
            "frecuencia_dia": 3,
            "duracion_dias": 14,
            "observaciones": "No beber alcohol mientras se toma"
        },
        "personal": {
            "_id": 2,
            "tipo_id": "Cedula",
            "nombre": "Paulina González",
            "email": "mpaulina@gmail.com",
            "doc_identidad": "9876543210",
            "cargo": "Enfermera",
            "foto": "https://randomuser.me/api/portraits/women/90.jpg"
        },
        "especialidad": "Enfermería",
        "fecha": {
            "$date": "2023-10-03T05:00:00.000Z"
        }
    },
    {
        "_id": 3,
        "paraclinicos": "Ecografía abdominal sin novedades.",
        "evolucion": "Se ha iniciado un nuevo tratamiento. Paciente en observación.",
        "procedimiento": {
            "_id": 3,
            "nombre": "Ecografía abdominal",
            "descripcion": "Uso de ondas de sonido para visualizar los órganos internos del abdomen."
        },
        "medicamento": {
            "_id": 2,
            "nombre": "Ibuprofeno",
            "dosis": "400 mg",
            "via": "Oral",
            "frecuencia_dia": 3,
            "duracion_dias": 5,
            "observaciones": "No exceder la dosis recomendada"
        },
        "personal": {
            "_id": 3,
            "tipo_id": "Cedula",
            "nombre": "Francisco Arango",
            "email": "fa1990@hotmail.com",
            "doc_identidad": "2468135790",
            "cargo": "Medico",
            "foto": "https://randomuser.me/api/portraits/men/74.jpg"
        },
        "especialidad": "Gastroenterología",
        "fecha": {
            "$date": "2023-09-17T05:00:00.000Z"
        }
    },
]

function Historia() {

    const { pacienteId } = useParams();
    const [pacientes, setPacientes] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/pacientes/' + pacienteId)
            .then((res) => res.json())
            .then(datosRespuesta => {
                setPacientes(datosRespuesta);
                // console.log(pacientes);
            })
            .catch(console.log)
    }, [])
    return (
        <>
            {pacientes ? (
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <div>
                        <br />
                        <h1 className="font-bold px-6 text-lg text-center">Información del paciente</h1>
                        <br />
                    </div>
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <tbody>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 text-center border border-gray-300" colSpan="2">Nombre</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 text-center border border-gray-300" colSpan="2">{pacientes.nombre}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Tipo de documento</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.tipo_id}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Documento</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.doc_identidad}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Fecha de nacimiento</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.fecha_nacimiento}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Edad</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.edad}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Género</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.genero}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Correo electrónico</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.email}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Dirección</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.direccion}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Celular</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.celular}</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">EPS</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.eps}</td>
                                <td className="p-3 font-bold bg-gray-50 text-gray-900 border border-gray-300">Grupo sanguíneo</td>
                                <td className="p-3 text-gray-800 text-center border border-b">{pacientes.grupo_sanguineo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            ) : (
                <p>Cargando datos del paciente...</p>
            )}
            <div>
                <h1 className="font-bold px-6 text-lg">Registros</h1>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr className="border">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Fecha</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Personal Asistencial</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Especialidad</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Acciones</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {registros.map((registro) => (
                            <Registro key={registro._id} registro={registro} />
                        ))}

                    </tbody>
                </table>
            </div>
            <button className="bg-slate-300 m-4 lg:hover:bg-gray-400  py-3 px-6 rounded-full" onClick={() => navigate('/ListarPacientes')}>Regresar</button>
        </>
    )
}

export default Historia;