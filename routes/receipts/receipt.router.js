const express = require('express');
const  {
    httpGetPointsById,
    httpPostReceipts
} = require('./receipt.controller');

const receiptRouter = express.Router();

receiptRouter.get('/receipts/:id/points', httpGetPointsById);
receiptRouter.post('/receipts/process', httpPostReceipts);

module.exports = receiptRouter;