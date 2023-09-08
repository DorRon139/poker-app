import React from 'react'

import './card.css'

const Card = ({ suit, value }) => {
  return (
    <img className="card-img" src={`./cards/${value}${suit}.svg`} alt={`${value}${suit}`} />
    )
}

export default Card