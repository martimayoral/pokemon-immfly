import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import ContainerLayout from '../../layouts'
import AllPokemon from '../../pages/AllPokemon'
import PokemonInfo from '../../pages/PokemonInfo'
import Favourites from '../../pages/Favourites'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokemon' element={<ContainerLayout />}>
          <Route index element={<AllPokemon />} />
          <Route path='/pokemon/:name' element={<PokemonInfo />} />
        </Route>
        <Route path='/favourites' element={<ContainerLayout />}>
          <Route index element={<Favourites />} />
        </Route>
        <Route path='*' element={<Navigate to='/pokemon' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
