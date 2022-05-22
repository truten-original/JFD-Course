const groceries = {
  'Orange Juice': {
    price: 1.5,
    discount: 10,
  },
  'Chocolate': {
    price: 2,
    discount: 0,
  },
}
const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
  { product: 'Orange Juice', quantity: 500 },
]
function getTotalPriceOfShoppingBag(shoppingBag) {
  //   shoppingBag.reduce((acc, item) => {
  //       return
  //     if (groceries[item.product]['discount'] !== 0) {
  //       acc +=
  //         item.quantity *
  //           groceries[item.product]['price'] *           //// почему то этот подход не работает
  //           groceries[item.product]['discount'] /
  //         100
  //     }
  //     else {
  //       acc += item.quantity * groceries[item.product].price
  //     }
  //   }, 0)
  let sum = 0
  for (let i = 0; i < shoppingBag.length; i++) {
    if (groceries[shoppingBag[i].product]['discount'] !== 0) {
      sum +=
        (shoppingBag[i].quantity *
          groceries[shoppingBag[i].product]['price'] *
          groceries[shoppingBag[i].product]['discount']) /
        100
    } else {
      sum += shoppingBag[i].quantity * groceries[shoppingBag[i].product].price
    }
  }
  return sum.toFixed(2)
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice)
console.log(groceries['Orange Juice'])
