const Joi = require('joi');

module.exports = function validateReceipt(receipt){
    const ItemSchema = Joi.object({
        shortDescription: Joi.string().pattern(/^[\w\s\-]+$/).required().description('The Short Product Description for the item.'),
        price: Joi.string().pattern(/^\d+\.\d{2}$/).required().description('The total price paid for this item.')
      });
    
      
    const ReceiptSchema = Joi.object({
      retailer: Joi.string().pattern(/^\S+$/).required().description('The name of the retailer or store the receipt is from.'),
      purchaseDate: Joi.string().isoDate().required().description('The date of the purchase printed on the receipt.'),
      purchaseTime: Joi.string().pattern(/^\d{2}:\d{2}$/).required().description('The time of the purchase printed on the receipt. 24-hour time expected.'),
      items: Joi.array().items(ItemSchema).min(1).required().description('An array of items included in the receipt.'),
      total: Joi.string().pattern(/^\d+\.\d{2}$/).required().description('The total amount paid on the receipt.')
    });

    return ReceiptSchema.validate(receipt);
    
}




