import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
// import Registro from './components/Registro';
import Historia from './views/historia';
import Login from './views/Login';
import RegistroView from './views/registro_info';
import PrivateRoute from './components/PrivateRoute'
import CrearPaciente from './views/crearPaciente'
import Paciente from './views/ListarPacientes'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Historia />}></Route>
          <Route path="/registro/:registroId" element={<RegistroView />} exact></Route>
          <Route path="/Paciente" element={<CrearPaciente />}></Route>
        <Route path="/ListarPacientes" element={<Paciente />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

