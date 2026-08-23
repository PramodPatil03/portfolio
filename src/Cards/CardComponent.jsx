import React from 'react'

import './cards.css'

const CardComponent = ({title, firstPara, secondPara, description}) => {
    return (
        <div className="card sub-holder font-white">
            <h3>{title}</h3>
            <p className="firstPara">{firstPara}</p>
            <p>{secondPara}</p>
            <p>{description}</p>
        </div>
    )
}

export default CardComponent
