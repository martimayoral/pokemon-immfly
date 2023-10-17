import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import { BrowserRouter } from 'react-router-dom'
import FavouritePokemonContext from '../../../contexts/favouritePokemonContext'
import PokemonCard from '.'

describe('Pokemon card test', () => {
  const pokemonName = 'pikachu'
  const favouriteList = []
  const setFavouriteList = () => { }
  let component = render()

  beforeEach(() => {
    component = render(
      <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
        <BrowserRouter>
          <PokemonCard pokemonName={pokemonName} />
        </BrowserRouter>
      </FavouritePokemonContext.Provider>
    )
  })

  test('pokemon name rendering', () => {
    component.getByText(pokemonName)
  })

  test('render image', () => {
    component.getByAltText(/image/)
  })
})
