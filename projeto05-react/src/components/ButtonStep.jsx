import React from 'react'
import styles from './ButtonStep.module.css'
import {IoChevronBack,IoChevronForward} from 'react-icons/io5'
import {BsSend} from 'react-icons/bs'

function ButtonStep({tipo,text, direction, action}) {
  return (
    <>
    <button type={tipo} className={styles.btn} onClick={action}>
    {direction === 'left' && (<span><IoChevronBack /></span>)}
        {text} 
    {direction === 'right' && (<span><IoChevronForward /></span>)}
    {direction === 'send' && (<span><BsSend /></span>)}
        
        </button>
    
    
    </>
  )
}

export default ButtonStep