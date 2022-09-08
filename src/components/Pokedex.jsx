import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pokedex.css'
import PokemonCard from './pokedex/PokemonCard'
import Header from './pokedex/Header'
import Pagination from './pokedex/Pagination'

const Pokedex = ({ isName }) => {

    const [pokemons, setPokemons] = useState()
    const [pokeSearch, setPokeSearch] = useState()
    const [optionType, setOptionType] = useState('All')
    const [pagination, setPagination] = useState(0)

    useEffect(() => {
        if (optionType !== 'All') {
            // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
            const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
            axios.get(URL)
                .then(res => {
                    const arr = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({ results: arr })
                })
                .catch(err => console.log(err))
        } else if (pokeSearch) {
            // Aquí se hace la lógica cuando el usuario busca por el input
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

            const obj = {
                results: [{ url }]
            }
            setPokemons(obj)
        } else {
            // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
            const URL = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${pagination}`
            axios.get(URL)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err))
        }
    }, [pokeSearch, optionType, pagination])


    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        setOptionType('All')
        e.target.searchText.value = ""
    }

    const [listTypes, setListTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setListTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setOptionType(e.target.value)
        setPokeSearch('')
    }

    return (
        <div className='Pokedex'>
            <Header />
            <p className='title-pokedex'><span className='name-color'>Bienvenido {isName},</span> aquí podrás encontrar tu pokemón favorito</p>
            <div className='menu-input-selector'>
                <form className='input-pokedex' onSubmit={handleSubmit}>
                    <input className='input-input-pokedex' id='searchText' type="text" placeholder='Busca tu pókemon' />
                    <button className='input-pokedex-button' >Comenzar</button>
                </form>

                <select className='select-pokedex' value={optionType} onChange={handleChange}>
                    <option value="All">All pokemons</option>
                    {
                        listTypes?.map(type => (
                            <option key={type.name} value={type.name}>{type.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className='pokemon-card'>

                {
                    pokemons?.results.map(pokemon => (
                        <PokemonCard
                            key={pokemon.url}
                            pokemonURL={pokemon.url}
                        />
                    ))
                }
            </div>
            <Pagination
                setPagination={setPagination}
                pagination={pagination}
            />
        </div>
    )
}

export default Pokedex

