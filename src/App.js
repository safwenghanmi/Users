
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useState } from 'react';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';
import User from './Pages/User';
import NavBar from './component/NavBar';

function App() {
  const [isAuth,setIsauth]=useState(true)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/*' element={<Error/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>

        { isAuth ? <Route path='/admin' element={<Admin/>}/> : <Route exact path='/*' element={<Error/>}/> }
        <Route path='/users' element={<User/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
