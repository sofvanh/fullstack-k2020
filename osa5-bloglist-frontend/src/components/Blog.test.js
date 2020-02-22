import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const someUser = {
  name: 'Sofi'
}

const someBlog = {
  author: 'Charles Dickens',
  title: 'Oliver, and other Twists',
  url: 'www.ot.com',
  likes: 10,
  user: someUser
}

const someAction = () => { }

const notExactOptions = {
  exact: false
}

test('renders title and author', () => {
  const component = render(
    <Blog
      blog={someBlog}
      likeAction={someAction}
      deleteAction={someAction}
      isOwned={someAction} />
  )

  expect(component.getByText('Charles Dickens', notExactOptions)).toBeVisible()
  expect(component.getByText('Oliver, and other Twists', notExactOptions)).toBeVisible()
})

test('does not render url or likes by default', () => {
  const component = render(
    <Blog
      blog={someBlog}
      likeAction={someAction}
      deleteAction={someAction}
      isOwned={someAction} />
  )

  expect(component.getByText('www.ot.com', notExactOptions)).not.toBeVisible()
  expect(component.getByText('Likes:', notExactOptions)).not.toBeVisible()
})

test('clicking view reveals url and likes', async () => {
  const component = render(
    <Blog
      blog={someBlog}
      likeAction={someAction}
      deleteAction={someAction}
      isOwned={someAction} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.getByText('www.ot.com', notExactOptions)).toBeVisible()
  expect(component.getByText('Likes:', notExactOptions)).toBeVisible()
})

test('clicking like works', async () => {
  const mockHandler = jest.fn()

  const component = render(
    <Blog
      blog={someBlog}
      likeAction={mockHandler}
      deleteAction={someAction}
      isOwned={someAction} />
  )

  const likeButton = component.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls.length).toBe(2)
})