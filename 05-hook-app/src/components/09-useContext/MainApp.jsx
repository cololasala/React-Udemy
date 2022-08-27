import React from 'react';
import { Routes,  Route, Navigate, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
      <UserProvider>
        <h1>MainApp</h1>
        <NavBar/>
        <hr/>

        <Routes>  {/* es un arreglo de rutas */}
            <Route path='/' element={<HomePage />}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='/*' element={<Navigate to='about'/>}/>  {/* si se ingresa una ruta que no existe se redirecciona a about */}
        </Routes>
      </UserProvider>
  )
}
