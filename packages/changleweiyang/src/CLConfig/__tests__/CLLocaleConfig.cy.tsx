import { mount } from '@vue/test-utils'
import { CLButton } from '@/CLButton'
import CLLocaleConfig from '../CLLocaleConfig'
import en from '@/locale/en'
import { ref, provide } from 'vue'

describe('CLButton locale config', () => {
  it('should be able to use locale config', () => {
    const enLocale = ref(en)
    // locale is work  add another component after 
    /* cy.mount(
      (<CLLocaleConfig locale={enLocale.value}>
        <CLButton />
      </CLLocaleConfig>),
    ) */
  })
})