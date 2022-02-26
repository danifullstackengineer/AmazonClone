const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51KXAUxDelfvIQhggaHx7kWBTL4V1NcpOGGFn5B1hYtr532C79ROi6MCyRXFcIoQY2zv0gcuK2yN18MH1a1OhivdC00OcKIrKRI");


// API

// - App config
const app = express();
// - Middlewares
app.use(cors())
app.use(express.json())

// - API routes
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment request received BOOM!!! >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen comman
exports.api = functions.https.onRequest(app)
