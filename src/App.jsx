import { useState } from 'react'
import FavouritePokemonContext from './contexts/favouritePokemonContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  const [favouriteList, setFavouriteList] = useState(['charmander', 'pikachu', 'snorlax'])

  return (
    <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
      <AppRoutes />
    </FavouritePokemonContext.Provider>
  )
}

export default App
