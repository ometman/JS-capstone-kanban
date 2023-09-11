const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=6');
    const data = await response.json();
    return data;
  } catch (error) {
    return 'something went wrong';
  }
};

export default getProducts;