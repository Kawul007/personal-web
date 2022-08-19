import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/home' exact element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
