import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './SimpleForm.css'

export const FormWithCustomHook = () => {

    const { stateForm, handleInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = stateForm;
    return (
        <>
            <h2>FormWithCustomHook</h2>
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name='name'                 // este name hace referencia al name del stateForm
                    className='form-control'
                    placeholder='ingresa tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
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
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div className='form-group'>
                <input
                    type="password"
                    name='password'    // este email hace referencia al email del stateForm
                    className='form-control'
                    placeholder='ingresa tu password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button className='btn btn-primary mt-2' onClick={onResetForm}>Reset</button>
        </>

    )
}
