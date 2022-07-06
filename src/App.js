import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar';
import UserList from './components/UserList';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useState } from 'react'
import PrivateRoute from './Routes/Routes';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Users' element={<UserList />} />
        <Route path='/Admin' element={<PrivateRoute isAuth={isAuth} />} />

        <Route path='/Admin' element={<Admin />} />
        <Route path='/user/:id'element={<Profile/>}/>


      </Routes>
    </div>
  );
}

export default App;
