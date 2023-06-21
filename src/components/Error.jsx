import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
    
  return (
    <>
    <h2>Error: {error.message}</h2>
    <pre>{error.status}</pre>
    </>
    )
}

export default Error