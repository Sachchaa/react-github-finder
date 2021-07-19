import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Sorry, The Page You Tried Cannot Be Found</h3>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export default Error
