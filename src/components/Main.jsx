import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import initialPick from '../assets/initialLogo.png'
import './main.css'
// import { useDispatch } from 'react-redux'
// import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Main = ({ changeClick, setIsName }) => {

    // const dispatch = useDispatch()
    // const inputname = dispatch(setNameTrainer(data.name))

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        setIsName(data.name)
        changeClick()
        navigate('/')
    }

    return (
        <div className='main'>
            <img className='image-main' src={initialPick} alt="pokedex" />
            <h1 className='title-main'>¡Hola entrenador!</h1>
            <p className='text-main'>Para poder comenzar, dame tu nombre</p>
            <div className='input-main'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required {...register('name')} className='input-input-main' type="text" placeholder='Tu nombre' />
                </form>
                <button className='input-main-button' onClick={handleSubmit(onSubmit)}>Comenzar</button>
            </div>
            <div className='red-large'></div>
            <div className='black-circle'></div>
            <div className='circle-principal-black'>
                <div className='circle-white'>
                    <div className='circle-black'>
                        <div className='final-circle'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main