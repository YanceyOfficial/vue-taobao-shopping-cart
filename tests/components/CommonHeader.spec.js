/// <reference types="cypress" />

import { mount } from '@cypress/vue'
import CommonFooter from '@/components/CommonFooter.vue'

describe('测试 CommonHeader 组件', () => {
  it('如果传入的 totalNum 为 20, 标题应该显示 "购物车(20)"', () => {
    mount(CommonFooter, { propsData: { totalNum: 20 } })

    cy.contains('.header_text', '购物车(20)').should('be.visible')
  })
})
