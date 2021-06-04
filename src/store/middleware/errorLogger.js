const errorLogger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type == 'error') {
      console.log(action.payload.message)
    } else {
      next(action)
    }
  }

export default errorLogger
