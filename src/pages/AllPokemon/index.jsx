import React, { useEffect, useState } from 'react'
import HeaderImages from '../../components/HeaderImages'
import PokemonGrid from '../../components/PokemonCardGrid/PokemonGrid'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage'
import ErrorPage from '../ErrorPage'
import HeaderContent from '../../components/Styled/HeaderContent'
import MainContent from '../../components/Styled/MainContent'

const AllPokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [fetchState, setFetchState] = useState('loading')

  useEffect(() => {
    fetch(process.env.REACT_APP_POKEMON_API_URL + '?limit=151')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results.map(pokemonData => pokemonData.name))
        setFetchState('success')
      })
      .catch(() => {
        // handle error
        setFetchState('error')
      })
  }, [])

  if (fetchState === 'loading') {
    return <LoadingPage />
  }
  if (fetchState === 'error') {
    return <ErrorPage>There was an error loading pokemons</ErrorPage>
  }

  return (
    <>
      <HeaderContent>
        <HeaderImages />
        <h2>Generation 1</h2>
        <h3>151 pokemon</h3>
        <h3><Link to='/favourites'>See favorites</Link></h3>
      </HeaderContent>
      <MainContent>
        <PokemonGrid pokemonNameList={pokemonList} />
      </MainContent>
    </>
  )
}

export default AllPokemon
