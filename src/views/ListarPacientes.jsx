import Paciente from "../components/Paciente";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const pacientes = [
    {
        "_id": 1,
        "tipo_id": "cedula",
        "nombre": "Juan Perez",
        "email": "juanperez@gmail.com",
        "grupo_sanguineo": "A+",
        "genero": "m",
        "edad": 35,
        "fecha_nacimiento": {
            "$date": "1987-06-30T00:00:00.000+00:00"
        },
        "direccion": "Calle 123 #456",
        "celular": 1234567890,
        "eps": "Sura",
        "doc_identidad": "6958271430"
    },
    {
        "_id": 2,
        "tipo_id": "pasaporte",
        "nombre": "María Rodríguez",
        "email": "maria.rodriguez@hotmail.com",
        "grupo_sanguineo": "B-",
        "genero": "f",
        "edad": 28,
        "fecha_nacimiento": {
            "$date": "1995-07-25T00:00:00.000+00:00"
        },
        "direccion": "Avenida 456 #789",
        "celular": 9876543210,
        "eps": "Nueva EPS",
        "doc_identidad": "8573096421"
    },
    {
        "_id": 3,
        "tipo_id": "cedula",
        "nombre": "Luis González",
        "email": "luisito@gmail.com",
        "grupo_sanguineo": "O+",
        "genero": "m",
        "edad": 42,
        "fecha_nacimiento": {
            "$date": "1980-11-05T00:00:00.000+00:00"
        },
        "direccion": "Carrera 789 #101",
        "celular": 5555555555,
        "eps": "Sura",
        "doc_identidad": "1302648759"
    },
]

function Paciente() {
    const { logout } = useAuth();
    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr className="border">
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Número de documento</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Nombre</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Género</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Grupo sanguíneo</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Celular</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Dirección</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Correo electrónico</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">EPS</th>
                            <th scope="col" className="border px-6 py-4 font-bold text-gray-900">Acciones</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {pacientes.map((paciente) => (
                            <Paciente key={paciente._id} paciente={paciente} />
                        ))}

                    </tbody>
                </table>
            </div>
            <button className="bg-slate-300 m-4 py-3 px-6 rounded-full" onClick={logout}>Log out</button>
        </>
    )
}

export default Paciente;