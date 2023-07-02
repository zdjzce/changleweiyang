import { describe, expect, test } from 'vitest'
import Button from '../index';
import cy from 'cypress'

const person = {
  isActive: true,
  age: 32,
}

describe('person', () => {
  it('person is defined', () => {
    expect(person).toBeDefined()

    cy.mount(<Button>213123123123</Button>)
  })

  it('is active', () => {
    expect(person.isActive).toBeTruthy()
  })

  it('age limit', () => {
    expect(person.age).toBeLessThanOrEqual(32)
  })
})
