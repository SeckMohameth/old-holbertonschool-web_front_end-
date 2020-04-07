const stock = {
    macbooK: 2,
    iphone: 4
}

const processPayment = (itemName) => {
    stock[itemName] -= 1;
    console.log("Payment is being processed for item ${itemName}")
}

const processError = (itemName) => {
    console.log("No more ", itemName, " in stock")
    console.log("Payment is not being processed")
}

const processOrder = (itemName, callbackPayment, callBackError) =>{
    console.log("Verifying the stock of ", itemName)
    if (itemName != 0){
        callBackError(itemName);
    }
    else if (itemName === 0){
        callBackError(itemName);
    }
}

const message = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
processOrder(message.toLowerCase(), processPayment, processError);
