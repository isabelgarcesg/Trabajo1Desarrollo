import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
import PrivateRoute from './components/PrivateRoute'
import Historia from './views/historia';
import Login from './views/Login';
import RegistroView from './views/registro_info';
import CrearPaciente from './views/crearPaciente'
import Paciente from './views/ListarPacientes'
import Dashboard from './views/Home'
import Register from './views/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Historia/:pacienteId" element={<Historia />}></Route>
        <Route path="/registro/:registroId" element={<RegistroView />} exact></Route>
        <Route path="/Paciente" element={<CrearPaciente />}></Route>
        <Route path="/ListarPacientes" element={<Paciente />}></Route>
        <Route path="/crearRegistro" element={<Register />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <BrowserRouter>
<div>
  <Sidebar />
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={<PrivateRoute />}
    >
      <Route path="/" element={<Dashboard />} />
      <Route path="/Historia/:pacienteId" element={<Historia />} />
      <Route path="/registro/:registroId" element={<RegistroView />} exact />
      <Route path="/Paciente" element={<CrearPaciente />} />
      <Route path="/ListarPacientes" element={<Paciente />} />
      <Route path="/crearRegistro" element={<Register />} />
    </Route>
  </Routes>
</div>
</BrowserRouter> */}
