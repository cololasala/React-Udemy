import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {                  // inicio de form objeto vacio
    const [stateForm, setStateForm] = useState(initialForm);

    const handleInputChange = ({ target }) => { // desestructuro el event
        const { name, value } = target;
        setStateForm({
            ...stateForm,
            [name]: value             // target name seria "name" o "email" (depende que input lo llame) y target value seria el valor propio del input
        })
    }

    const onResetForm = () => {
        setStateForm(
            initialForm
        );
    }

    return {
        stateForm,
        handleInputChange,
        onResetForm
    }
}
