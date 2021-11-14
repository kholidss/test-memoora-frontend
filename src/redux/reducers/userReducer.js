/* eslint-disable default-param-last */
const initState = {
  data: {},
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'FILL_DATA_USER':
      return { ...state, user: action.payload }

    default:
      return state
  }
}

export default reducer
