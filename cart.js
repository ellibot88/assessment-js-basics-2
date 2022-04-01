///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

const total = cart.reduce((acc, add) => {
  console.log(add.price);
  return acc + add.price;
}, cart[0].price);

console.log(total);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return cartTotal * (1 + tax) - couponValue;
};

console.log(calcFinalPrice(200, 10, 0.07));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    A customer object for a restaurant should document necessary information that is gathered by the restaurant during
    the experience. Some properties that come to mind are Name, credit card info, last date of visit, cart contents. These properties
    are necessary for the restaurant to keep track of its customers and perform standard procedures such as charging a customer, 
    getting them the right food, etc.

    name = string (storing their first and last name)
    creditCard = object (containing properties of the credit card such as card # and zipcode)
    lastVisitDate = string (standard date syntax like '04/01/2022')
    cart = array of objects (containing properties of food that is currently in the cart)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const elliott = {
  name: "Elliott",
  creditCard: {
    number: 12345678901384,
    zipCode: 84606,
    cvc: 455,
  },
  lastVisitDate: "03/31/2022",
  cart: [
    {
      name: "salad",
      price: 20,
      quantity: 1,
    },
    {
      name: "salad",
      price: 4,
      quantity: 2,
    },
  ],
};

console.log(elliott);
