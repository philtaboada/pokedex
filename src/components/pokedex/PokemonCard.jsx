import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pokemonCard.css'

const PokemonCard = ({ pokemonURL }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(pokemonURL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handClick = () => navigate(`/pokedex/${pokemon.name}`)

    return (
        <article onClick={handClick} className={`card-pokedex color-${pokemon?.types[0].type.name}`}>
            <div className={`color-pokedex-card bg-${pokemon?.types[0].type.name}`}><img className='img-pokedex' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" /></div>
            <div className='info-pokedex'>
                <div className='title-container-pokedex'>
                    <h1 className={`title-pokedex color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name.toUpperCase()}</h1>
                    <p className='p-pokedex'>{pokemon?.types[0].type.name}</p>
                    <p className='p-type-pokedex'>Tipo</p>
                </div>
                <br />
                <div className='features-pokedex'>
                    <div className='type-features-pokemon'>
                        <p className='type-p'>HP</p>
                        <h2 className='type-h2'>{pokemon?.stats[0].base_stat}</h2>
                    </div>
                    <div className='type-features-pokemon'>
                        <p className='type-p'>ATAQUE</p>
                        <h2 className='type-h2'>{pokemon?.stats[1].base_stat}</h2>
                    </div>
                </div>
                <div className='features-pokedex'>
                    <div className='type-features-pokemon'>
                        <p className='type-p'>DEFENSA</p>
                        <h2 className='type-h2'>{pokemon?.stats[2].base_stat}</h2>
                    </div>
                    <div className='type-features-pokemon'>
                        <p className='type-p'>VELOCIDAD</p>
                        <h2 className='type-h2'>{pokemon?.stats[5].base_stat}</h2>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PokemonCard