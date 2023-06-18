//import the uuidv4 module to generate random ID.
const { v4: uuidv4 } = require('uuid');

//import receipts (target & M&M receipts) from the models folders.
const targetReceipt  = require('../../models/target-receipt');
const marketReceipt = require('../../models/M&M-receipt.json')


//import the function to get the points and validate receipts
const getPoints = require('../../middleware/getPoints');
const validateReceipt = require('../../models/schema');


//Initialized array to store the receipts after the POST endpoint.
const receipts = [];


//Endpoint that accept a receipt ID and generate the points for that receipt.
function httpGetPointsById(req, res){
    try {
        //Find the receipt with the given ID in the receipts array.
        let receipt = receipts.find(c => c.id === req.params.id);

        if(!receipt) return res.status(404).json('No receipt found for that id')

        let point = {
            "points": getPoints(receipt)
        }

       return res.status(200).json(point);

    } catch (error) {
        res.status(500).json(error);
    }
  
}

//Endpoint to post a receipts
function httpPostReceipts(req, res){
    try {

       const { error } = validateReceipt(targetReceipt);

       if(!error){
        const id = uuidv4();

        //Can switched to a different receipt and the result will be pushed
        //to the main array along wiht the generated ID.
        const newReceipt = {
             id,
             ...marketReceipt
        }
 
        receipts.push(newReceipt);
 
         return res.status(200).json({" id": id});
       } 
       
       else {
        res.status(400).json('The receipt is invalid')
       }

    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    httpGetPointsById,
    httpPostReceipts
}
