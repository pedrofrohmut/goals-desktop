export const getMessageFromErr = (err: any): string =>
    (err.response && err.response.data && err.response.data.message) ||
    err.message ||
    err.toString()
