import faker from 'faker'

export const mount = (el) => {
  const cardText = `<div>you have <strong>${faker.random.number()}</strong> in your carts</div>`

  el.innerHTML = cardText
}

const elem = document.querySelector("#dev-cart");
if(elem) mount(elem)
