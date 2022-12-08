import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';
import Home from './Components/Pages/Home/Home';
import Order from './Components/Pages/Order/Order';
import Header from './Components/Share/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>
    </>
  );
}

export default App;
