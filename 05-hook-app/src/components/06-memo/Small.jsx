import React from 'react';
import { memo } from 'react'
 
export const Small = memo(({ contador }) => {  // el parametro de memo es nuestro componente en si
    console.log("se volvio a generar el componente")
  return (
    <small>{contador}</small>
  )
})
