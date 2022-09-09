import { mount } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/cartShow'

const elemProd = document.querySelector("#my-products")
mount(elemProd)
const elemCart = document.querySelector("#my-cart")
mountCart(elemCart)

console.log("container")
