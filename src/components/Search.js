import React, { Component } from 'react'
import '../css/search.css'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
import logo from '../img/meli.jpg'

export default class Search extends Component {

    searchRef = React.createRef()

    handleData = (e) => {
        e.preventDefault()
        const input = this.searchRef.current.value 
        this.props.searchData(input)

        const send = document.querySelector('.nav-search')
        send.reset()
    }

    render() {
        return (
            <header>
                <div className='nav-header'>
                    <div className='header-top'>
                        <img className='logo' src={logo} alt='img' />
                        <form className='nav-search' onSubmit={this.handleData}>
                            <input ref={this.searchRef} className='nav-search-input' type='text' placeholder='Buscar productos, marcas y más...' autoFocus maxLength='50' />
                            <button type='submit' className='search-button'>
                                <BsSearch />
                            </button>
                        </form>
                        <FaHandHoldingUsd className='hand-holding' />
                        <p>Comprá hoy y pagá después</p>
                    </div>
                    <div className='header-low'>
                        <div className='card-location'>
                            <FiMapPin className='map' />
                            <div className='card'>
                                <span className='send'>Enviar a</span>
                                <div className='capital-Federal'>Capital Federal</div>
                            </div>
                        </div>
                        <div className='list-one'>
                            <ul className='nav-menu-list'>
                                <li>Categorias</li>
                                <li>Ofertas</li>
                                <li>Historial</li>
                                <li>Supermercado</li>
                                <li>Moda</li>
                                <li>Vender</li>
                                <li>Ayuda</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='nav-menu-list list-two'>
                                <li>Creá tu cuenta</li>
                                <li>Ingresa</li>
                                <li>Mis compras</li>
                                <li>
                                    <CgShoppingCart className='cart'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
