import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import PokemonGrid from '.'
import { BrowserRouter } from 'react-router-dom'
import FavouritePokemonContext from '../../../contexts/favouritePokemonContext'

describe('Pokemon grid test', () => {
  const favouriteList = []
  const setFavouriteList = () => { }
  const exampleList = ['charmander', 'pikachu', 'snorlax']
  let component

  // settup with router and provider
  // and a mock function to as a useState setter for the favourites
  beforeEach(() => {
    component = render(
      <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
        <BrowserRouter>
          <PokemonGrid pokemonNameList={exampleList} />
        </BrowserRouter>
      </FavouritePokemonContext.Provider>
    )
  })

  // test if rendering the name of the example pokemon
  test('render pokemon name', () => {
    component.getByText('charmander')
  })

  // test if we render as many images as pokemons there are
  test('render as many pokemons as expected', () => {
    expect(component.getAllByAltText(/image/)).toHaveLength(exampleList.length)
  })

  test('pokemon filter', () => {
    const pokemonFilter = component.getByPlaceholderText('Name filter')

    // test with ch (should get only 'charmander' and 'pikachu')
    let filterText = 'ch'
    fireEvent.change(pokemonFilter, { target: { value: filterText } })

    expect(component.getAllByAltText(/image/)).toHaveLength(2)

    // test with aa (should get none)
    filterText = 'aa'
    fireEvent.change(pokemonFilter, { target: { value: filterText } })

    expect(component.queryAllByAltText(/image/)).toHaveLength(0)
  })
})
