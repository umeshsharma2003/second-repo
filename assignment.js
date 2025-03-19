// Write a JavaScript code calculateElectricityBill(units) that takes the number of electricity units consumed as input and calculates the total bill based on the following slab rates:

// Description
// Up to 100 units → ₹3 per unit
// 101 to 200 units → ₹5 per unit
// 201 to 300 units → ₹7 per unit
// Above 300 units → ₹10 per unit
// Additionally, if the total bill exceeds ₹1000, apply a 10% surcharge on the total amount.


let cost;
if(input>=0 && input<=100){
    cost = input*3;
}

else if (input>100 && input<=200) {
    cost = input*5;
} 

else if(input>201 && input<=300){
    cost = input*7;
    if(cost>1000){
        cost = cost+cost/10
    }
    
}
else if(input>300){
     cost = input*10;
     if(cost>1000){
        cost = cost+cost/10
    }
    
}


console.log(cost);