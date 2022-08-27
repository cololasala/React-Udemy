import { useState } from 'react'

export const useForm = (initialForm = {}) => {                  // inicio de form objeto vacio
    const [stateForm, setStateForm] = useState(initialForm);

    const handleInputChange = ({ target }) => { // desestructuro el event (obtengo el target)
        const { name, value } = target;
        setStateForm({
            ...stateForm,
            [name]: value             // target name seria "name" o "email" (depende de que input lo llame) y target value seria el valor propio del input
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
