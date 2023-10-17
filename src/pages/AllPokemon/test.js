import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import { BrowserRouter } from 'react-router-dom'
import AllPokemon from '.'

describe('All pokemons', () => {
  const favouriteList = ['initialPokemon', 'otherPokemon']
  const allPokemonsList = ['initialPokemon', 'otherPokemon', 'nonFavPokemon', 'morePokemon']
  const mockFetchReturnData = allPokemonsList.map((p) => { return { name: p } })

  const setFavouriteList = () => { }

  test('render as many images as favorite pokemons', async () => {
    // mock fetch function with a mock Response type promise
    global.fetch = jest.fn(() => Promise.resolve(
      {
        json: () => Promise.resolve({
          results: mockFetchReturnData
        })
      }))

    const component = render(
      <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
        <BrowserRouter>
          <AllPokemon />
        </BrowserRouter>
      </FavouritePokemonContext.Provider>
    )

    // wait to load
    await waitForElementToBeRemoved(() => component.getByText(/Loading/))

    const images = component.getAllByAltText(/image/)
    expect(images).toHaveLength(allPokemonsList.length)
  })
})
