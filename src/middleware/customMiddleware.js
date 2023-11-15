export const customMiddleware = store => next => action => {
    return next(action)
}