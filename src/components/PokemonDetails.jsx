import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './pokedex/Header'
import './pokemonDetails.css'
import '../components/pokedex/pokemonCard.css'

const PokemonDetails = () => {

    const [pokeInfo, setPokeInfo] = useState()

    const { name } = useParams()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
        axios.get(URL)
            .then(res => setPokeInfo(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />
            <article className='card-pokedex-pokemondetails'>
                <div className={`color-pokemondetails-card bg-${pokeInfo?.types[0].type.name}`}>
                    <img className='img-pokedex-pokemondetails' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
                </div>
                <div className='info-pokemondetails'>
                    <div className='title-container-pokemondetails'>
                        <div className='box-id'>
                            <h1 className={`title-pokemondetails color-text-${pokeInfo?.types[0].type.name}`}># {pokeInfo?.id}</h1>
                        </div>
                        <h1 className={`title-pokemondetails color-text-${pokeInfo?.types[0].type.name}`}>
                            {pokeInfo?.name.toUpperCase()}
                        </h1>
                        <div className='pokemon-peso'>
                            <div className='pokemon-peso-in'>
                                <p>Peso</p>
                                <h3>45</h3>
                            </div>
                            <div className='pokemon-peso-in'>
                                <p>Altura</p>
                                <h3>50</h3>
                            </div>
                        </div>
                        <div className='pokemon-peso'>
                            <div className='flex-directions-pokemon'>
                                <h3>Tipo</h3>
                                <div className='pokemon-peso'>
                                    <div className={`box-pokemon-in color-text-white bgcolor-${pokeInfo?.types[0].type.name}`}>
                                        <p className='p-pokemon-in'>{pokeInfo?.types[0].type.name}</p>
                                    </div>
                                    <div className={`box-pokemon-in color-text-white bgcolor-${pokeInfo?.types[1].type.name}`}>
                                        <p className='p-pokemon-in'>{pokeInfo?.types[1].type.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-directions-pokemon'>
                                <h3>Habilidades</h3>
                                <div className='pokemon-peso'>
                                    <div className='box-pokemon-in'>
                                        <p className='p-pokemon-in'>{pokeInfo?.abilities[0].ability.name}</p>
                                    </div>
                                    <div className='box-pokemon-in'>
                                        <p className='p-pokemon-in'>{pokeInfo?.abilities[1].ability.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Stats</h1>
                        <label htmlFor="file">HP:</label>
                        <br />
                        <progress className='decoration-stats' id="file" max="150" value={pokeInfo?.stats[0].base_stat}>{pokeInfo?.stats[0].base_stat}</progress>
                        <br />
                        <label htmlFor="file">Ataque:</label>
                        <br />
                        <progress className='decoration-stats' id="file" max="150" value={pokeInfo?.stats[1].base_stat}>{pokeInfo?.stats[1].base_stat}</progress>
                        <br />
                        <label htmlFor="file">Defensa:</label>
                        <br />
                        <progress className='decoration-stats' id="file" max="150" value={pokeInfo?.stats[2].base_stat}>{pokeInfo?.stats[2].base_stat}</progress>
                        <br />
                        <label htmlFor="file">Velocidad:</label>
                        <br />
                        <progress className='decoration-stats' id="file" max="150" value={pokeInfo?.stats[5].base_stat}>{pokeInfo?.stats[5].base_stat}</progress>
                    </div>
                    <br />
                    {/* <div className='features-pokemondetails'>
                        <div className='type-features-pokemon-pokemondetails'>
                            <p className='type-p-pokemondetails'>HP</p>
                            <h2 className='type-h2-pokemondetails'>{pokeInfo?.stats[0].base_stat}</h2>
                        </div>
                        <div className='type-features-pokemon-pokemondetails'>
                            <p className='type-p-pokemondetails'>ATAQUE</p>
                            <h2 className='type-h2-pokemondetails'>{pokeInfo?.stats[1].base_stat}</h2>
                        </div>
                    </div>
                    <div className='features-pokemondetails'>
                        <div className='type-features-pokemon-pokemondetails'>
                            <p className='type-p-pokemondetails'>DEFENSA</p>
                            <h2 className='type-h2-pokemondetails'>{pokeInfo?.stats[2].base_stat}</h2>
                        </div>
                        <div className='type-features-pokemon-pokemondetails'>
                            <p className='type-p-pokemondetails'>VELOCIDAD</p>
                            <h2 className='type-h2-pokemondetails'>{pokeInfo?.stats[5].base_stat}</h2>
                        </div>
                    </div> */}
                </div>
            </article>
        </div>
    )
}

export default PokemonDetails