import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {           // para crearlo asi uso el useEffectSnippet
        console.log("componente Message montado");
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }
        window.addEventListener('mousemove', mouseMove);    // evento de movimiento de mouse, cuando mueve va a la funcion mouseMove

        return () => {
            console.log("componente Message desmontado");       // en este return nos sirve para hacer "limpieza" de algo, en este caso remuevo el eventListener
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h3>Coordenadas de mouse</h3>
            <p>
                x: {x}
                y: {y}
            </p>
        </>
    )
}
