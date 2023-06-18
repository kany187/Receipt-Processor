
//Function that award how many points to a receipt.
module.exports = function getPoints(obj){
    let points = 0;
    
    let name = obj.retailer.replaceAll(' ', '').replaceAll(/[^a-z0-9]/gi, '');
    let total = obj.total;
    let day = obj.purchaseDate.slice(-2);
    let time = obj.purchaseTime;
    let item = obj.items;
  
  
    if(name) points += name.length;
  
     if(total % 1 === 0) points += 50;
      
     if(total % 0.25 === 0) points += 25;
  
    for(let i = 1; i < item.length; i += 2){
       points += 5;
    }
  
    for(let i = 1; i < item.length; i++){
      if(item[i].shortDescription.trim().length % 3 === 0){
          points += Math.ceil((item[i].price * 0.2))
      }
      
    }
  
     if (time >= '14:00' && time <= '16:00') points += 10;
  
     if(parseInt(day) % 2 === 1) points += 6;
    
    return points;
  }