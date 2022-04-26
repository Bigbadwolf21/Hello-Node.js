function placeOrder(orderNumber) {
    console.log(`Customer order ${orderNumber}`);
    prepareAndDeliverOrder(function() {
        console.log(`Processed and delivered order: ${orderNumber}`);
    });
}

function prepareAndDeliverOrder(callback) {
    setTimeout(callback, 4000);
}

placeOrder(1001);
placeOrder(1002);
placeOrder(1005);
placeOrder(1008);
placeOrder(1010);
placeOrder(1013);
placeOrder(1020);