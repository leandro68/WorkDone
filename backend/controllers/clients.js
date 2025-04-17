const clientRouter = require('express').Router();
const Client = require('../models/client');

// GET all clients
// GET /api/clients
// Returns a list of all clients
clientRouter.get('/', async (request, response) => {
    Client
        .find({})
        .then(clients => {
            response.json(clients)
        })
})

// GET a client by ID
// GET /api/clients/:id
// Returns a client with the specified ID
clientRouter.get('/:id', async (request, response) => {
    const id = request.params.id;

    Client
        .findById(id)
        .then(client => {
            if (client) {
                response.json(client)
            } else {
                response.status(404).end()
            }
        })
})

// POST a new client
// POST /api/clients
// Creates a new client and returns the created client
// Expects a JSON object with the following properties:
// - name: string
// - subscriber: string
// - subscriptionCost: number
clientRouter.post('/', async (request, response) => {
    const body = request.body;

    const client = new Client({
        name: body.name,
        subscriber: body.subscriber,
        subscriptionCost: body.subscriptionCost
    });

    const savedClient = await client.save();
    response.status(201).json(savedClient);
})

module.exports = clientRouter