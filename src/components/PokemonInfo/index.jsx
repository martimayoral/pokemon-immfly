import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import LoadingPage from '../../pages/LoadingPage'
import ErrorPage from '../../pages/ErrorPage'
import SetFavouriteButton from '../SetFavouriteButton'

const PokemonInfoCard = styled.article`
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

const PokemonTitle = styled.h2`
  text-transform: capitalize;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-bottom: 4px;
  font-size: .85rem;
  font-weight: 500;
`

const PropertyHeader = styled.h3`
  display: inline;
`

const Ul = styled.ul`
  margin-top: 5px;
`

const Property = styled.div`
  margin-top: 5px;
`

const PokemonInfo = () => {
  const { name } = useParams()
  const [fetchState, setFetchState] = useState('loading')
  const [error, setError] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState()

  const naviagete = useNavigate()

  useEffect(() => {
    fetch(process.env.REACT_APP_POKEMON_API_URL + name)
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
      <img alt={name + ' image'} src={process.env.REACT_APP_BASE_POKEMON_IMAGE_URL + `${name}.gif`} />
      <PokemonTitle>{name}</PokemonTitle>
      <SetFavouriteButton pokemonName={name} />
      <InforTextContainer>
        <Property>
          <PropertyHeader>ID:</PropertyHeader>
          <span>{pokemonInfo.id}</span>
        </Property>
        <Property>
          <PropertyHeader>Type:</PropertyHeader>
          <span>{pokemonTypes}</span>
        </Property>
        <Property>
          <PropertyHeader>Height:</PropertyHeader>
          <span>{pokemonInfo.height}</span>
        </Property>
        <Property>
          <PropertyHeader>Abilities</PropertyHeader>
          <Ul>
            {pokemonInfo.abilities.map((a) => <li key={a.ability.name}>{a.ability.name}</li>)}
          </Ul>
        </Property>
      </InforTextContainer>
    </PokemonInfoCard>
  )
}

export default PokemonInfo
