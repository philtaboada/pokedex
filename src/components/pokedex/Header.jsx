import React from 'react'
import logo2 from '../../assets/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <a href="#">
                    <img className='logo2' src={logo2} alt="logo" />
                </a>
                <div className='red-large-pokedex'></div>
                <div className='black-large-pokedex'></div>
                <div className='circle-principal-black-pokedex'>
                    <div className='circle-white-pokedex'>
                        <div className='circle-black-pokedex'>
                            <div className='final-circle-pokedex'></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header