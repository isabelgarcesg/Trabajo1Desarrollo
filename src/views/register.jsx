//import { Navigate, useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from '../components/Sidebar';

function Register({ onSave }) {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ahora = new Date();
  const offset = ahora.getTimezoneOffset() * 60000; // Ajusta la zona horaria
  const fechaActual = new Date(ahora - offset).toISOString().substr(0, 10);

  const [_id, setId] = useState("");
  const [paraclinicos, setPara] = useState("");
  const [evolucion, setEvo] = useState("");
  const [procedimientoId, setProID] = useState("");
  const [nombrePro, setnombrePro] = useState("");
  const [descripcion, setdesc] = useState("");
  const [medicamentoId, setMedID] = useState("");
  const [nombreMedicamento, setnombreMedi] = useState("");
  const [dosis, setDosis] = useState("");
  const [via, setVia] = useState("");
  const [frecuencia_dia, setFrec] = useState("");
  const [duracion_dias, setDuracion] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [personalId, setPersID] = useState(user._id);
  const [tipo_id, setTipo] = useState(user.tipo_id);
  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [doc_identidad, setDoc] = useState(user.doc_identidad);
  const [cargo, setCargo] = useState(user.cargo);
  const [foto, setFoto] = useState(user.foto);
  const [User,setUser] = useState(user.usuario);
  const [password,setPass] = useState(user.password);
  const [especialidad, setEspe] = useState("");
  const [fecha, setfecha] = useState(fechaActual);


  const registro = {
    _id,
    paraclinicos,
    evolucion,

    procedimiento: {
      procedimientoId,
      nombrePro,
      descripcion
    },

    medicamento:
    {
      medicamentoId,
      nombreMedicamento,
      dosis,
      via,
      frecuencia_dia,
      duracion_dias,
      observaciones
    },

    personal:
    {
      personalId,
      tipo_id,
      nombre,
      email,
      doc_identidad,
      cargo,
      foto,
      User,
      password
    },

    especialidad,
    fecha
  };

  const procedimientos = [
    {
      "_id": 1,
      "nombre": "Extracción de sangre",
      "descripcion": "Proceso para recoger una muestra de sangre para análisis médicos."
    },
    {
      "_id": 2,
      "nombre": "Radiografía de tórax",
      "descripcion": "Obtención de imágenes de los pulmones y el corazón mediante radiación."
    },
    {
      "_id": 3,
      "nombre": "Ecografía abdominal",
      "descripcion": "Uso de ondas de sonido para visualizar los órganos internos del abdomen."
    },
    {
      "_id": 4,
      "nombre": "Colonoscopia",
      "descripcion": "Exploración del colon utilizando un tubo flexible con cámara."
    },
    {
      "_id": 5,
      "nombre": "Cirugía de apendicitis",
      "descripcion": "Eliminación quirúrgica del apéndice inflamado."
    }
  ]

  const medicamento = [
    {
      "_id": 1,
      "nombre": "Aspirina",
      "dosis": "500 mg",
      "via": "Oral",
      "frecuencia_dia": 2,
      "duracion_dias": 7,
      "observaciones": "Tomar con comida"
    },
    {
      "_id": 2,
      "nombre": "Ibuprofeno",
      "dosis": "400 mg",
      "via": "Oral",
      "frecuencia_dia": 3,
      "duracion_dias": 5,
      "observaciones": "No exceder la dosis recomendada"
    },
    {
      "_id": 3,
      "nombre": "Amoxicilina",
      "dosis": "500 mg",
      "via": "Oral",
      "frecuencia_dia": 2,
      "duracion_dias": 10,
      "observaciones": "Tomar con agua"
    },
    {
      "_id": 4,
      "nombre": "Paracetamol",
      "dosis": "650 mg",
      "via": "Oral",
      "frecuencia_dia": 4,
      "duracion_dias": 3,
      "observaciones": "No tomar con el estómago vacío"
    },
    {
      "_id": 5,
      "nombre": "Loratadina",
      "dosis": "10 mg",
      "via": "Oral",
      "frecuencia_dia": 1,
      "duracion_dias": 7,
      "observaciones": "Tomar antes de dormir"
    }
  ]

  const save = (registro) => {
    console.log("Registro a guardar:", registro);
    onSave(registro);
    setId("");
    setPara("");
    setEvo("");
    setProID("");
    setnombrePro("");
    setdesc("");
    setMedID("");
    setnombreMedi("");
    setDosis("");
    setFrec("");
    setVia("");
    setDuracion("");
    setObservaciones("");
    setPersID(user._id);
    setTipo(user.tipo_id);
    setNombre(user.nombre);
    setEmail(user.email);
    setDoc(user.doc_identidad);
    setCargo(user.cargo);
    setFoto(user.foto);
    setPass(user.password)
    setUser(user.usuario)
    setEspe("");
    setfecha(fechaActual);
  };

  return (
    <>
    <Sidebar />
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2" style={{ marginLeft: '70px' }}>
      <form onSubmit={handleSubmit(save)}>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="Especialidad">
              Especialidad
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="Especialidad"
              type="text"
              placeholder="Especialidad del servicio"
              name="Especialidad"
              {...register("Especialidad", { required: true })}
              onChange={(event) => setEspe(event.target.value)} value={especialidad}
            />
            {errors.Especialidad && <p className="text-red-500 mt-1">Campo requerido</p>}
          </div>

          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="Fecha">
              Fecha
            </label>

            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="Fecha"
            type="text"
            name="Fecha"
            defaultValue={fechaActual}
            readOnly
            {...register("Fecha", { required: true })}
            
          />
          </div>

        </div>

        <div className="md:w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="paraclinicos">
            Paraclinicos
          </label>
          <textarea
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="paracli"
            type="text"
            placeholder="Ingresar los paraclinicos del paciente"
            name="paracli"
            {...register("paracli", { required: true })}
            onChange={(event) => setPara(event.target.value)} value={paraclinicos}
          />
          {errors.paracli && <p className="text-red-500 mt-1">Campo requerido</p>}
        </div>

        <div className="md:w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="Evolucion">
            Evolucion
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="Evolucion"
            type="text"
            placeholder="Ingresar la evolución del paciente"
            name="Evolucion"
            {...register("Evolucion", { required: true })}
            onChange={(event) => setEvo(event.target.value)} value={evolucion}
          />
          {errors.Evolucion && <p className="text-red-500 mt-1">Campo requerido</p>}
          
        </div>

        <div className="-mx-3 md:flex mb-2">

          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="Medicamento">
              Medicamento
            </label>
            <div className="relative">

              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="Medicamento"
                {...register("Medicamento", { required: true })}
                onChange={(event) => {
                  const selectedMedicamento = medicamento.find(med => med.nombre === event.target.value);
                  if (selectedMedicamento) {
                    setMedID(selectedMedicamento._id);
                    setnombreMedi(selectedMedicamento.nombre);
                    setDosis(selectedMedicamento.dosis);
                    setVia(selectedMedicamento.via);
                    setFrec(selectedMedicamento.frecuencia_dia);
                    setDuracion(selectedMedicamento.duracion_dias);
                    setObservaciones(selectedMedicamento.observaciones);
                    console.log (selectedMedicamento);
                  } 
                  else {
                    // Si no se selecciona ningún medicamento o no se encuentra en la lista, puedes restablecer los valores a su estado inicial
                    setMedID("");
                    setnombreMedi("");
                    setDosis("");
                    setVia("");
                    setFrec("");
                    setDuracion("");
                    setObservaciones("");
                  }

                }}
                value={nombreMedicamento}
              >
                <option value="">Seleccione un medicamento</option>
                {medicamento.map(med => (
                  <option key={med._id} value={med.nombre}>{med.nombre}</option>
                ))}
              </select>
              {errors.Medicamento && <p className="text-red-500 mt-1">Campo requerido</p>}

              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="Procedimientos">
              Procedimientos
            </label>
            <div className="relative">

            <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="Procedimiento"
                {...register("Procedimiento", { required: true })}
                onChange={(event) => {
                  const selectedProcedimiento = procedimientos.find(proc => proc.nombre === event.target.value);
                  if (selectedProcedimiento) {
                    setProID(selectedProcedimiento._id);
                    setnombrePro(selectedProcedimiento.nombre);
                    setdesc(selectedProcedimiento.descripcion);
                    console.log (selectedProcedimiento);
                  } else {
                    // Si no se selecciona ningún procedimiento o no se encuentra en la lista, puedes restablecer los valores a su estado inicial
                    setProID("");
                    setnombrePro("");
                    setdesc("");
                  }
                }}
                value={nombrePro}
              >
                <option value="">Seleccione un procedimiento</option>
                {procedimientos.map(proc => (
                  <option key={proc._id} value={proc.nombre}>{proc.nombre}</option>
                ))}
              </select>
              {errors.Procedimiento && <p className="text-red-500 mt-1">Campo requerido</p>}
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

        </div>
        <button disabled={!especialidad || !paraclinicos || !evolucion || !medicamentoId || !nombreMedicamento ||
      !dosis||
      !via||
      !frecuencia_dia||
      !duracion_dias||
      !observaciones ||
      !procedimientoId||
      !nombrePro||
      !descripcion}  className="bg-sky-500 py-2 px-4 rounded-full w-full mt-10 " onClick={() => save(registro)}  type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
  
}

export default Register;