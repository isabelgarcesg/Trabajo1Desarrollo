import Registro from "../components/Registro";

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
            "tipo_id": "cedula",
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
            "tipo_id": "cedula",
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
            "tipo_id": "cedula",
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
    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr className="border">
                            <th scope="col" className="border px-6 py-4 font-medium text-gray-900">Fecha</th>
                            <th scope="col" className="border px-6 py-4 font-medium text-gray-900">Personal Asistencial</th>
                            <th scope="col" className="border px-6 py-4 font-medium text-gray-900">Especialidad</th>
                            <th scope="col" className="border px-6 py-4 font-medium text-gray-900">Acciones</th>

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