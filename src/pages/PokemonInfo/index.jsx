import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import LoadingPage from '../LoadingPage'
import ErrorPage from '../ErrorPage'
import SetFavouriteButton from '../../components/SetFavouriteButton'

const PokemonInfoCard = styled.div`
  background-color: ${theme.cardsColor};
  margin-top: 100px;
  width: 250px;
  padding: 10px;
  border: 1px solid ${theme.cardsContrast};
  color: ${theme.cardsContrast};
  
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const InforTextContainer = styled.div`
  width: 100%;
`

const CloseButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: red;
  }
`

const PokemonTitle = styled.span`
  text-transform: capitalize;
  margin-top: 10px;
  margin-bottom: 10px;
`

const PokemonInfo = () => {
  const { name } = useParams()
  const [fetchState, setFetchState] = useState('loading')
  const [error, setError] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState()

  const naviagete = useNavigate()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + name)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 404) {
          throw new Error('Pokemon not found')
        } else {
          throw new Error('Unknown error')
        }
      })
      .then((data) => {
        console.log(data)
        setPokemonInfo(data)
        setFetchState('success')
      })
      .catch((e) => {
        // handle error
        setFetchState('error')
        setError(e.message)
      })
  }, [])
  if (fetchState === 'error') {
    return <ErrorPage>{error}</ErrorPage>
  }
  if (!pokemonInfo || fetchState === 'loading') {
    return <LoadingPage />
  }

  const handleClose = () => {
    naviagete('/pokemon')
  }

  let pokemonTypes = pokemonInfo.types.reduce((pr, cr) => (pr += cr.type.name + ', '), '')
  pokemonTypes = pokemonTypes.substring(0, pokemonTypes.length - 2)

  return (
    <PokemonInfoCard>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <img alt={name + ' image'} src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
      <PokemonTitle>{name}</PokemonTitle>
      <SetFavouriteButton pokemonName={name} />
      <InforTextContainer>
        <p><b>ID:</b> {pokemonInfo.id}</p>
        <p><b>Type:</b> {pokemonTypes}</p>
        <p><b>Height:</b> {pokemonInfo.height}</p>
        <p><b>Habilities</b></p>
        <ul>
          {pokemonInfo.abilities.map((a) => <li key={a.ability.name}>{a.ability.name}</li>)}
        </ul>
      </InforTextContainer>
    </PokemonInfoCard>
  )
}

export default PokemonInfo
