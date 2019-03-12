var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var item = new Object({
    itemName: item,
    itemPrice: price
  });
  cart.push(item);
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : cartContents()
}

function total() {

}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice([i].itemName)
    }
    else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
      setCart([])
      return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

function cartContents() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function total() {
  var sum = sumUpPrices()
  return sum
}
