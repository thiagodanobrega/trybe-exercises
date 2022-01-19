// Parte I
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// Exercício 1
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const { deliveryPerson } = order.order.delivery;
  const { name, phoneNumber } = order;
  const { street, number, apartment } = order.address;
  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}.`);
}

customerInfo(order);

// Exercício 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.keys(order.order.drinks).map(drink => order.order.drinks[drink].type);
  const items = pizzas.concat(drinks).join(', ');
  const {total} = order.payment
  
  console.log(`Olá ${order.name}, o total do seu pedido de ${items} é R$${parseInt(total).toFixed(2).replace('.', ',')}`)

}

order.name = 'Luiz Silva';
order.payment.total = 50;

orderModifier(order);