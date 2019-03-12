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
  setCart().push(item);
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {

  if (cart.length === 0) {
    return "Your shopping cart is empty."
    } else {
      var cartDescription = 'In your cart, you have '
      for (item in setCart()) {
        return `In your cart, you have ${item} at ${$price}.`
        }
      }
}

function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
