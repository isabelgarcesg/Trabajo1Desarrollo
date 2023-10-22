import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
// import Registro from './components/Registro';
import Historia from './views/historia';
import RegistroView from './views/registro_info';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Historia />}></Route>
      <Route path="/registro/:registroId" element={<RegistroView />} exact></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

