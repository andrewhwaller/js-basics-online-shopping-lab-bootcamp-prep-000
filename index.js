var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  return generateCartItem()
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`
}

function generateCartItem(itemName) {
  var price = Math.floor(Math.random() * 101)
  var item = new Object({
    itemName: item,
    itemPrice: price
  });
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
    } else {
      for (item in cart) {
        return `In your cart, you have ${itemName} at ${$price}.`
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
