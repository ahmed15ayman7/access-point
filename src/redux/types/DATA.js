export let DataAddToCart = (userId, product) => {
  let dateNow = new Date();
  return JSON.stringify({
    userId: userId,
    date:
      dateNow.getDate() +
      "-" +
      (dateNow.getMonth() + 1) +
      "-" +
      dateNow.getFullYear(),
    products: [{ productId: product.id, quantity: product.quantity }],
  });
};
export let DataAddProduct = (title, price, description, image, category) => {
  return JSON.stringify({
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
};
export let DataUser = (email, username, password) => {
  let name = username.splite(" ");
  return JSON.stringify({
    email: email,
    username: username,
    password: password,
    name: {
      firstname: name[0],
      lastname: name[name.length - 1],
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  });
};
export let DataLoginUser = (username, password) => {
  return JSON.stringify({
    username: username,
    password: password,
  });
};
