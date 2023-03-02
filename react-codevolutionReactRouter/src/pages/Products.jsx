import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import styles from './Products.module.css'

function Products() {
  return (
    <div className={styles.container}>
        <label htmlFor="searchProducts">Pesquisa:</label>
        <input type="search" name="searchProducts" id="searchProducts" placeholder='nome do produto'/>
        
        <div className={styles.buttonContainer}>  
            <Link to='featured'>Featured</Link>
            <Link to='new' >new</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Products