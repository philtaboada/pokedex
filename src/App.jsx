import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const [isName, setIsName] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const changeClick = () => setIsLogged(!isLogged)
  return (
    <Routes>
      <Route path='/main' element={<Main setIsName={setIsName} changeClick={changeClick} />} />

      <Route element={<ProtectedRoute isLogged={isLogged} />}>
        <Route path='/' element={<Pokedex isName={isName} />} />
        <Route path='/pokedex/:name' element={<PokemonDetails />} />
      </Route>
    </Routes>
  )
}

export default App
