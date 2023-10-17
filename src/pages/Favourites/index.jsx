import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HeaderImages from '../../components/HeaderImages'
import PokemonGrid from '../../components/PokemonCardGrid/PokemonGrid'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'

const Favourites = () => {
  const { favouriteList } = useContext(FavouritePokemonContext)

  return (
    <>
      <HeaderImages />
      <h2>Favourite pokemon</h2>
      <h3>{favouriteList.length} favourite pokemon</h3>
      <h3><Link to='/pokemon'>See all pokemons</Link></h3>
      <PokemonGrid pokemonNameList={favouriteList} />
    </>
  )
}

export default Favourites
