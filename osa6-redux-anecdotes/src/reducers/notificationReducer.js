const initialState = {
  content: '',
  id: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      clearTimeout(state.id)
      return action.data
    default:
      return state
  }
}

export const setNotification = (content, seconds) => {
  return async dispatch => {
    const id = setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: {
          content: '',
          id: 0
        }
      })
    }, seconds * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        content,
        id
      }
    })
  }
}

export default reducer