import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

test('adding blog works', () => {
  const mockHandler = jest.fn()

  const component = render(
    <BlogForm
      createAction={mockHandler} />
  )

  const title = component.container.querySelector('#title')
  fireEvent.change(title, { target: { value: 'How to catch tail' } })

  const author = component.container.querySelector('#author')
  fireEvent.change(author, { target: { value: 'Dog' } })

  const url = component.container.querySelector('#url')
  fireEvent.change(url, { target: { value: 'www.am.dog' } })

  const button = component.getByText('Add')
  fireEvent.click(button)

  const call = mockHandler.mock.calls[0]
  expect(call[0]).toBe('How to catch tail')
  expect(call[1]).toBe('Dog')
  expect(call[2]).toBe('www.am.dog')
})