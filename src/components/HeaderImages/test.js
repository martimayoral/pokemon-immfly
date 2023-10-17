import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/jest-globals'
import HeaderImages from '.'

describe('Header images', () => {
  let component

  beforeEach(() => {
    component = render(<HeaderImages />)
  })

  test('render immfly logo', () => {
    component.getByAltText('immfly-logo')
  })

  test('render pokemon logo', () => {
    component.getByAltText('pokemon-logo')
  })
})
