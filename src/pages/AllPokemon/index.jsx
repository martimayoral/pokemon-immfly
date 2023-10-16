import { useEffect, useState } from 'react'
import HeaderImages from '../../components/HeaderImages'
import PokemonGrid from '../../components/PokemonCardGrid/PokemonGrid'
import { Link } from 'react-router-dom'
import LoadingPage from '../LoadingPage'
import ErrorPage from '../ErrorPage'

const AllPokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [fetchState, setFetchState] = useState('loading')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
      <HeaderImages />
      <h2>Generation 1</h2>
      <h3>151 pokemon</h3>
      <h3><Link to='/favourites'>See favorites</Link></h3>
      <PokemonGrid pokemonNameList={pokemonList} />
    </>
  )
}

export default AllPokemon
