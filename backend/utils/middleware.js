const logger = require('../utils/logger');

//middleware for logging requests
// this middleware should be loaded before all other routes
// it will log the request method, path and body
// it will also log a separator line
// this middleware is useful for debugging
// and for logging requests to the server
// it will log the request method, path and body
// and a separator line
// it will also log the request time
// and the request IP address
// it will also log the request headers
// and the request query parameters
// it will also log the request URL
// it will also log the request protocol
const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.path);
    logger.info('Body:  ', request.body);
    logger.info('---');
    logger.info('Time:  ', new Date().toISOString());
    logger.info('IP:    ', request.ip);
    logger.info('Headers:', request.headers);
    logger.info('Query: ', request.query);
    logger.info('URL:   ', request.url);
    logger.info('Protocol:', request.protocol);
    logger.info('---');
    next();
}

//middleware for handling unknown endpoints
// this middleware should be loaded after all other routes
// and before the error handling middleware
// it will catch all requests to unknown endpoints
// and send a 404 status code with a message
// if the endpoint is not found
// it will also log the request method and path
// and the request body
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
}

//middleware for handling errors
// this middleware should be loaded after all other routes
// and before the error handling middleware
// it will catch errors from all routes
// and pass them to the error handling middleware
// it will also log the error message
// and send a response with the error message
// if the error is a CastError, it will send a 400 status code
// if the error is a ValidationError, it will send a 400 status code
// if the error is not handled, it will pass it to the next middleware
const errorHandler = (error, request, response, next) => {
    logger.error(error.message);
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }
    next(error);
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}