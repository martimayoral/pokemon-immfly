import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import { BrowserRouter } from 'react-router-dom'
import PokemonInfo from '.'

const mockPokemonInfoFromApi = {
  id: '25',
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/'
      }
    }
  ],
  abilities: [
    {
      ability: {
        name: 'static',
        url: 'https://pokeapi.co/api/v2/ability/9/'
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: 'lightning-rod',
        url: 'https://pokeapi.co/api/v2/ability/31/'
      },
      is_hidden: true,
      slot: 3
    }
  ],
  height: 4
}

// mock react router dom params
const currentPokemon = 'pikachu'
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ name: currentPokemon })
}))

describe('Pokemon info', () => {
  const favouriteList = ['initialPokemon', 'otherPokemon']
  const setFavouriteList = () => { }
  let component = render() // init for intelligence

  beforeEach(async () => {
    // mock fetch function with a mock Response type promise
    global.fetch = jest.fn(() => Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockPokemonInfoFromApi)
      }))

    component = render(
      <FavouritePokemonContext.Provider value={{ favouriteList, setFavouriteList }}>
        <BrowserRouter>
          <PokemonInfo />
        </BrowserRouter>
      </FavouritePokemonContext.Provider>
    )

    // wait to load
    await waitForElementToBeRemoved(() => component.getByText(/Loading/))
  })

  test('render pokemon name', () => {
    component.getByText(currentPokemon)
  })

  test('render pokemon id', () => {
    component.getByText(mockPokemonInfoFromApi.id)
  })

  test('render pokemon type', () => {
    component.getByText(mockPokemonInfoFromApi.types[0].type.name)
  })

  test('render pokemon height', () => {
    component.getByText(mockPokemonInfoFromApi.height)
  })

  test('render pokemon abilities', () => {
    component.getByText(mockPokemonInfoFromApi.abilities[0].ability.name)
  })
})
