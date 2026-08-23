import React from 'react'

import './cards.css'

const TwoParamCardComponent = ({title, firstPara, background}) => {
    return (
        <div className="card sub-holder font-white" style={{ backgroundColor: background }}>
            <h3>{title}</h3>
            <p className="firstPara">{firstPara}</p>
        </div>
    )
}

export default TwoParamCardComponent
