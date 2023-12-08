import faker from "faker";

/*
 ** function to render the APP inside specific HTML Element
 */
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/*
 ** Situation #1
 ** we are running this file in development in isolation
 ** we are using our local index.html file
 ** which DEFINTELY has an element with an id of "dev-products"
 ** we want to immediately render our app into that element
 */

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  /*
   ** assuming our continer doesn't have
   ** element with id of "dev-products"
   */
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

/*
 ** Situation #2
 ** we are running this file in development or production
 ** through the CONTAINER app
 ** no GURANTEE that an element with an id of "dev-products" exists
 ** we DO NOT WANT try to immediately render the app
 */
export { mount };
