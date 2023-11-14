

export const customMiddleware = store => next => action => {
    console.log('MiddleWare triggered : ', action);

    return next(action)
}