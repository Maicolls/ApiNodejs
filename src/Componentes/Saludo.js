import React from "react";
import './Styles/Saludo.css'

const Saludo=({username})=>(
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}!</h1>
            <p>La mejor serie de TV!</p>
        </div>
    </div>
)

export default Saludo