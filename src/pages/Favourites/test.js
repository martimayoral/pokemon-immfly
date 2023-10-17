import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import { BrowserRouter } from 'react-router-dom'
import Favourites from '.'

describe('favourites test', () => {
  const favouriteList = ['initialPokemon', 'otherPokemon']
  const setFavouriteList = () => { }
  let component = render() // for intelisence

  // settup with router and provider
  // and a mock function to as a useState setter for the favourites
  beforeEach(() => {
    component = render(
      <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
        <BrowserRouter>
          <Favourites />
        </BrowserRouter>
      </FavouritePokemonContext.Provider>
    )
  })

  test('render as many images as favorite pokemons', () => {
    const images = component.getAllByAltText(/image/)
    expect(images).toHaveLength(favouriteList.length)
  })

  test('number of favourite pokemons displayed in header', () => {
    const favPokemonsText = component.getByText(/.\sfavourite pokemon/)
    expect(favPokemonsText.textContent).toContain(favouriteList.length.toString())
  })
})
