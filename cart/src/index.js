import faker from 'faker'

const cardText=`<div>you have <strong>${faker.random.number()}</strong> in your carts</div>`

document.querySelector("#dev-cart").innerHTML = cardText