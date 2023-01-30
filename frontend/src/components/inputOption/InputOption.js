import React from 'react'
import './InputOption.css'

const InputOption = ({Icon, title, color, widht, } ) => {
  return (
    <div className='inputOption'>
       <Icon style={{color: color}} />
       <p>{title}</p>
        </div>
  )
}

export default InputOption