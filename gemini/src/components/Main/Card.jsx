import React from 'react'
import './Card.css'
import {assets} from '../../assets/assets'

const Card = ({title, icon, onClick}) => {
  return (
    <div className='cardcss' onClick={onClick}>
      <button>
        <p>{title}</p>
        <div className='free-rider'>
            <img src={icon} alt="" />
        </div>
        </button>
      
    </div>
  )
}

export default Card
