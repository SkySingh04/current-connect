import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Payment } from './pages/Payment';
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { Customerdetails } from './pages/customerdetails';
import { Service } from './pages/service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/user' Component={Customerdetails}/>
        <Route path='/login' Component={Login} />
        <Route path='/service' Component={Service}/>
        <Route path='/payment' Component={Payment} />
      </Routes>

    </div>
  );
}

export default App;
