import Registro from "../components/Registro";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
                <div className="text-center overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    <table className="mx-auto border-collapse bg-white text-sm text-gray-500">
                        <thead>
                            <tr>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Documento</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tipo de documento</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nombre</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Género</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Edad</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Fecha de nacimiento</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Grupo sanguíneo</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">EPS</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Celular</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Correo electrónico</th>
                                <th className="p-3 font-bold bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.doc_identidad}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.tipo_id}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.nombre}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.genero}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.edad}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.fecha_nacimiento}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.grupo_sanguineo}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.eps}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.celular}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.email}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {pacientes.direccion}
                                    </td>
                                </tr>
                    </tbody>
                    </table>
                </div>
            ) : (
                <p>Cargando datos del paciente...</p>
            )}
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
            
        </>
    )
}

export default Historia;