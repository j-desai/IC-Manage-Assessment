import React from 'react'
import Todos from './todos'

describe('Todo Form', () => {
  it('creates a new todo with ID 201', () => {
    cy.mount(<Todos />)

    cy.get('input#title').type('New Todo');
    cy.get('input#completed').check();
    cy.get('button[type="submit"]').click();

    cy.get('p').should('contain', 'Created Todo with ID: 201');
  });
});
