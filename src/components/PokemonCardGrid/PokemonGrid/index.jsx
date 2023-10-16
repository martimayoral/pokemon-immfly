import styled from 'styled-components'
import { deviceSizes } from '../../../styles/variables'
import PokemonCard from '../PokemonCard'
import { useState } from 'react'

const OutterContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
`

const InnerContainer = styled.div`
  position: absolute;
  left: 50px;
  right: 50px;

  @media ${deviceSizes.mobile} {
    left: 75px;
    right: 75px;
  }

  @media ${deviceSizes.tablet} {
    left: 125px;
    right: 125px;
  }
`

const PokemonCardContainer = styled.div`
  /* background-color: blue; */
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const InputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`

const InputFilter = styled.input`
  width: 244px;
`

const PokemonGrid = ({ pokemonNameList }) => {
  const [nameFilter, setNameFilter] = useState('')

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value)
  }

  return (
    <OutterContainer>
      <InnerContainer>
        <InputContainer>
          <InputFilter placeholder='Name filter' type='search' value={nameFilter} onChange={handleNameFilterChange} />
        </InputContainer>
        <PokemonCardContainer>
          {pokemonNameList
            .filter((pokemonName) => pokemonName.includes(nameFilter))
            .map((pokemonName) => {
              return <PokemonCard key={pokemonName} pokemonName={pokemonName} />
            })}
        </PokemonCardContainer>
      </InnerContainer>
    </OutterContainer>
  )
}

export default PokemonGrid
