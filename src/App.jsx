import { useState } from 'react';
import './App.css';
import Start from './components/start/Start';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/So-Yummy-app/" element={<Start />} />
      <Route path="/So-Yummy-app/registration" element={<Registration />} />
      <Route path="/So-Yummy-app/signin" element={<SignIn />} />
    </Routes> 
     </>
  )
}
