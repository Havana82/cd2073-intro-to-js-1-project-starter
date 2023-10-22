/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

// create product objects in variables
const product1 = {name:"Cherry",
                  price:40,
                  quantity:0,
                  productId:1,
                  image:'../images/cherry.jpg'}

const product2 = {name:"Orange",
                  price:80,
                  quantity:0,
                  productId:2,
                  image:'../images/orange.jpg'}
const product3 = {name:"Strawberry",
                  price:60,
                  quantity:0,
                  productId:3,
                  image:'../images/strawberry.jpg'}
const product4 = {name:"Banana",
                  price:50,
                  quantity:0,
                  productId:4,
                  image:'../images/banana.jpg'}

// put product variables in a list
const products = [product1, product2, product3, product4]

// declare empty cart
const cart = [];

// adds product to cart and increases quantity if product already present
function addProductToCart(num){
    products.map(function(product){if(product.productId===num){
      if(cart.includes(product)){
        product.quantity+=1
      }
      else{
        cart.push(product);
        product.quantity+=1;
      }
      
    }
  })
  
}

// helper function for mapping through cart
function helper(num){
  let product;
  cart.map(function(item){
    if(item.productId === num){
      product = item;
    }})
  return product;
  }

// increases selected product by one
function increaseQuantity(num){
  let item = helper(num);
  item.quantity += 1;
}

// decreases selected product by 1
function decreaseQuantity(num){
  let item = helper(num);
  if(item.quantity>0){
    item.quantity-=1;
      
        
  }
  if(item.quantity===0){
    indx = cart.indexOf(item);
    cart.splice(indx,1)
  }
  
}

// removes product from cart
function removeProductFromCart(num){
    let item = helper(num);
    const indx = cart.indexOf(item);
    cart.splice(indx,1);
    item.quantity = 0;

}

// calculates total price of items in cart
function cartTotal(){
  let sum = 0;
  cart.map(function(items){return sum+= (items.price * items.quantity)})
  return sum;
}

// removes all products from cart
function emptyCart() {
  cart.forEach(function (product) {
      removeProductFromCart(product.productId);
  });
}
// calculate if amount paid is more or less than cart total
// declare global variable total
let total = 0;
function pay(amount){
    let price = cartTotal()
    total += amount
    // calculate remainder if amount is greater than total
    let remainder = amount - price;
    if(remainder >= 0){
      total = 0;
      emptyCart();
    }
    return remainder;
}


module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}