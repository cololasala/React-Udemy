
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';

export const LoginPage = () => {
    const { login  } = useContext(AuthContext); // aca hacemos uso de nuestro context llamado AuthContext, y de eso usaremos la funcion login
    const navigate = useNavigate();
    const lastPath = localStorage.getItem('lastPath') || '/';
    const onLogin = () => {

        login('Luciano');
        navigate(lastPath, {
            replace: true
        })
    }
  return (
    <>
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button className='btn btn-primary' onClick={ onLogin }>
                Login
            </button>
        </div>
    </>
  )
}