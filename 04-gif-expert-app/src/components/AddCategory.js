import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {   // al presionar enter se envia el form y se actualiza
    e.preventDefault();         // prevent default para que no actualice pagina al enviar el form
    
    if(inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats ]);   // llamo al setCategories y hago que sea el valor viejo (el array de categories) y le agrego el inputValue
      setInputValue(''); // reseteo el input
      console.log('submit');
    }
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{ inputValue }</p>
      <input type="text" value={inputValue} onChange={handleInputValue} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired, // hago que sea required la function setCategories
}

export default AddCategory;