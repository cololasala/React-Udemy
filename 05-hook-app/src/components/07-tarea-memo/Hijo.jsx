import React, {useMemo} from 'react'

export const Hijo = ({ numero, incrementar }) => {

    console.log('Me volví a generar :(');
    useMemo(() => {}, [])

    return (
        <button
            className="btn btn-primary me-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
