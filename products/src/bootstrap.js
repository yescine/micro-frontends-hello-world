import faker from 'faker'


export const mount = (elem) => {
  let products = ''

  for (let i = 0; i < 7; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  // console.log(products)

  elem.innerHTML = products

}

const isDev = process.env.NODE_ENV === "development"
if (isDev) {
  const el = document.querySelector("#dev-products")
  if (el) mount(el)
}
