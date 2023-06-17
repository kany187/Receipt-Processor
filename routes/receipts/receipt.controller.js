const { v4: uuidv4 } = require('uuid');

let receipt = []

function httpGetPointsById(req, res){
    try {
        let points = receipt.find(c => c.id === req.params.id);

        if(!points) res.status(404).json('The receipt with the given ID was not found!')
        res.json(points);
    } catch (error) {
        res.status(500).json(error);
    }
  
}

function httpPostReceipts(req, res){
    if(!req.body.retailer){
        res.status(200).json(`Retailer is required!`);
       return; 
    }

    try {
       
       const id = uuidv4();

       const newReceipt = {
            id,
            ...req.params.body
       }

       receipt.push(newReceipt);

       res.status(200).json(id);

    } catch (error) {
        res.status(500).json(error);
    }
}

console.log(receipt);

module.exports = {
    httpGetPointsById,
    httpPostReceipts
}