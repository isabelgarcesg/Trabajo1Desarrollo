import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Registro from './components/Registro';
import Historia from './views/historia';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Historia />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

