import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import ContainerLayout from '../../layouts'
import AllPokemon from '../../pages/AllPokemon'
import Favourites from '../../pages/Favourites'
import PokemonInfoPage from '../../pages/PokemonInfoPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokemon' element={<ContainerLayout />}>
          <Route index element={<AllPokemon />} />
          <Route path='/pokemon/:name' element={<PokemonInfoPage />} />
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
