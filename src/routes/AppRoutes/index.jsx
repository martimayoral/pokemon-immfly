import { Routes, Route, /* Outlet, */ BrowserRouter, Navigate } from 'react-router-dom'
import ContainerLayout from '../../layouts'
import AllPokemon from '../../pages/AllPokemon'
import PokemonInfo from '../../pages/PokemonInfo'
import Favourites from '../../pages/Favourites'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import { useState } from 'react'

const AppRoutes = () => {
  const [favouriteList, setFavouriteList] = useState(['ivysaur'])

  return (
    <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
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
    </FavouritePokemonContext.Provider>
  )
}

export default AppRoutes
