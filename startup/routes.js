const express = require('express');

const receiptRouter = require('../routes/receipts/receipt.router');

module.exports = function(app){
    app.use(express.json());
    app.use('/', receiptRouter)
}