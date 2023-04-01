import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div className="menu">
    <p>WolfGym Ecommerce</p>
    <p>Rutinas</p>
    <p>Suplementos</p>
    <p>Contacto</p>
    <CartWidget/>
    </div>
  )
}
