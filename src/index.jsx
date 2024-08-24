import React from 'react'
import './index.css';
import Start from './components/start/Start';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/yummy-app/" element={<Start />} />
      <Route path="/yummy-app/registration" element={<Registration />} />
      <Route path="/yummy-app/signin" element={<SignIn />} />
    </Routes> 
     </>
  )
}
