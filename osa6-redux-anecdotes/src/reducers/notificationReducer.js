const initialState = "Hello world!"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      content
    }
  }
}

export default reducer