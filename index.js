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
  for (var i = 0; i < getCart().length; i++ ) {
    array[i]
  }
}

function placeOrder(cardNumber) {
  // write your code here
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
