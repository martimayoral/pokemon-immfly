import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import { BrowserRouter } from 'react-router-dom'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import SetFavouriteButton from '.'

describe('Set favourite button', () => {
  const favouriteList = ['initialPokemon', 'otherPokemon']
  const mockSetFavouriteList = jest.fn()
  const buttonPokemon = 'charmander'

  // settup with router and provider
  // and a mock function to as a useState setter for the favourites
  // we will run tests secuentially, first add and then remove
  const component = render(
    <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList: mockSetFavouriteList }}>
      <BrowserRouter>
        <SetFavouriteButton pokemonName={buttonPokemon} />
      </BrowserRouter>
    </FavouritePokemonContext.Provider>
  )
  const favButton = component.getByAltText('fav-icon ' + buttonPokemon)

  test('add pokemon to favourite list', () => {
    fireEvent.click(favButton)

    const mockSetFavCall = mockSetFavouriteList.mock.calls[0][0]
    mockSetFavCall(favouriteList) // mock setState

    // ground tests
    expect(mockSetFavouriteList).toBeCalledTimes(1)
    expect(favouriteList).toContain('initialPokemon')
    expect(favouriteList).not.toContain('other pokemon name')

    // test is added
    expect(favouriteList).toContain(buttonPokemon)
  })

  mockSetFavouriteList.mockReset()
  test('remove pokemon to favourite list', () => {
    fireEvent.click(favButton)

    // check if its added correctly in previous test
    expect(favouriteList).toContain(buttonPokemon)

    const mockSetFavCall = mockSetFavouriteList.mock.calls[0][0]
    mockSetFavCall(favouriteList) // mock setState

    // ground tests
    expect(mockSetFavouriteList).toBeCalledTimes(1)
    expect(favouriteList).toContain('initialPokemon')
    expect(favouriteList).not.toContain('other pokemon name')

    // test if removed
    expect(favouriteList).not.toContain(buttonPokemon)
  })
})
