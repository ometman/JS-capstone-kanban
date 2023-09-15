import getProducts from './getProducts.js';

const productCount = async () => {
  const data = await getProducts();
  console.log(data.length);

  return data.length;
};

export default productCount;
