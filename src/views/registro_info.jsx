import { useParams } from "react-router-dom";
import Registro from "../components/Registro";







function RegistroView() {

    const { registroId } = useParams();

    // llamar a la API para consultar el registro con registroId
    const registro = {
        "_id": registroId,
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

    }

    return (

        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        <tr className="border border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Fecha</th>
                            <td scope="col" className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">{registro.fecha.$date}</td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Especialista</th>
                            <td className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src={registro.personal.foto}
                                        alt=""
                                    />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{registro.personal.nombre}</div>
                                    <div className="text-gray-500">{registro.personal.cargo}</div>
                                    <div className="text-gray-400">{registro.personal.tipo_id}: {registro.personal.doc_identidad}</div>
                                    <div className="text-gray-400">Email: {registro.personal.email}</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Especialidad</th>
                            <td scope="col" className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">{registro.especialidad}</td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Paraclínicos</th>
                            <td scope="col" className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">{registro.paraclinicos}</td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Evolución</th>
                            <td scope="col" className=" border flex gap-3 px-6 py-4 font-normal text-gray-900">{registro.evolucion}</td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Procedimiento</th>
                            <td scope="col" className=" border flex flex-col gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="font-medium text-gray-700">{registro.procedimiento.nombre}</div>
                                <div className="text-gray-500">{registro.procedimiento.descripcion}</div>
                            </td>
                        </tr>
                        <tr className="border hover:bg-gray-50">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900 bg-gray-50 ">Medicamento</th>
                            <td scope="col" className=" border flex flex-col gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="font-medium text-gray-700">{registro.medicamento.nombre}</div>
                                <div className="text-gray-500">Dosis: {registro.medicamento.dosis}</div>
                                <div className="text-gray-500">Via de administracion: {registro.medicamento.via}</div>
                                <div className="text-gray-500">Frecuencia: {registro.medicamento.frecuencia_dia} veces al día</div>
                                <div className="text-gray-500">Duración de tratamiento: {registro.medicamento.duracion_dias} días</div>
                                <div className="text-gray-500">Observaciones: {registro.medicamento.observaciones}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

        // <Registro registro={registro}></Registro>
    )
}

export default RegistroView;