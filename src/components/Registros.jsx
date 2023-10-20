import { ChatBubbleOvalLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

function Registro({ registro }) {
    return (
        <div className="flex gap-4 p-4 items-center justify-center w-1000">
            {/* <img className="rounded-full" src={registro.user.profileImage} alt={registro.user.name} width="40" /> */}
            <div style={divStyle}>
                <p className="font-bold" >paraclinicos</p>
                <p>{registro.paraclinicos}</p>
                <p className="font-bold" >Evolucion</p>
                <p>{registro.evolucion}</p>
                <p className="font-bold" >Procedimientos</p>
                <p className="font-bold" >Nombre</p>
                <p>{registro.procedimiento.nombre}</p>
                <p className="font-bold" >Descripcion</p>
                <p>{registro.procedimiento.descripcion}</p>
                <p className="font-bold" >Medicamentos</p>
                <p className="font-bold" >Nombre</p>
                <p>{registro.medicamento.nombre}</p>
                <p className="font-bold" >Dosis</p>
                <p>{registro.medicamento.dosis}</p>
                <p className="font-bold" >Administracion via</p>
                <p>{registro.medicamento.via}</p>
                <p className="font-bold" >Frecuencia</p>
                <p>{registro.medicamento.frecuencia_dia}</p>
                <p className="font-bold" >Duracion del tratamiento</p>
                <p>{registro.medicamento.duracion_dias}</p>
                <p className="font-bold" >Observaciones</p>
                <p>{registro.medicamento.observaciones}</p>
                <p className="font-bold" >Personal Asistencial</p>
                <p className="font-bold" >Nombre</p>
                <p>{registro.personal.nombre}</p>
                <p className="font-bold" >Correo</p>
                <p>{registro.personal.email}</p>
                <p className="font-bold" >Doc de identidad</p>
                <p>{registro.personal.doc_identidad}</p>
                <p className="font-bold" >Cargo</p>
                <p>{registro.personal.cargo}</p>
                <p className="font-bold" >Especialidad</p>
                <p>{registro.especialidad}</p>
                <p className="font-bold" >Fecha</p>
                <p>{registro.fecha.$date}</p>
            </div>
        </div>
    );
}

export default Registro;

const divStyle = {
    backgroundColor: 'white', // Cambia esto al color de fondo que desees
    margin: '10px',
    padding: '10px', // Añadí padding para que el margen interior tenga espacio
  };

