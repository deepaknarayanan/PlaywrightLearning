function orderfood(foodType)
{
   const payment="Phonepe"
   let delivery="62/3 kkd nagar"
if(foodType)
{
    var food="Pizza"
    console.log(payment +" "+ delivery+" "+ food);
    
}
else{
    
    console.log("1000 rupee" +" "+ delivery+" "+ food);
}
console.log(food)
console.log(payment)
}

orderfood(true);
orderfood(false);
