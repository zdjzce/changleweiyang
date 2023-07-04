import { CLButton } from '@/CLButton'
import CLLocaleConfig from '../CLLocaleConfig'
import en from '@/locale/en'
import { ref, provide } from 'vue';

describe('CLButton locale config', () => {
  it('should be able to use locale config', () => {

    const enLocale = ref(en)

    /* cy.mount(CLLocaleConfig, {
      props: {
        locale: enLocale.value
      },
      slots: {
        default: () => cy.mount(CLButton)
      },
      
    }) */
    cy.mount(<ClButton>123</ClButton>)

  })
})