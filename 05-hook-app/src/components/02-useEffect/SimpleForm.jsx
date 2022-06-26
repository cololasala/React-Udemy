import React, {useEffect, useState} from 'react';
import { Message } from './Message';
import './SimpleForm.css'

export const SimpleForm = () => {

    const [stateForm, setStateForm ] = useState({
        name: '',
        email: ''
    });

    const { name, email } = stateForm;

    useEffect( () => {  // ejecuta cuando se carga el componente una vez
        /* console.log('primer effect') */
    }, []);

    useEffect( () => {  // ejecuta cuando cambia el form
       /*  console.log('formState cambio') */
    }, [stateForm]);

    useEffect( () => {  // ejecuta cuando cambia solo el email
        /* console.log('email cambio') */
    }, [email]);

    const handleInputChange = ({ target }) => { // desestructuro el event
        setStateForm({
            ...stateForm,
            [target.name]: target.value             // target name seria "name" o "email" (depende que input lo llame) y target value seria el valor propio del input
        })
    }

    return (
        <>
            <h2>useEffect</h2>
            <hr/>

            <div className='form-group'>
                <input 
                    type="text"
                    name='name'                 // este name hace referencia al name del stateForm
                    className='form-control'
                    placeholder='ingresa tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <br />
            <div className='form-group'>
                <input 
                    type="text"
                    name='email'    // este email hace referencia al email del stateForm
                    className='form-control'
                    placeholder='ingresa tu email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message />}
        </>

    )
}
