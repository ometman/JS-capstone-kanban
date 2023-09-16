import getProducts from './getProducts.js';

const productCount = async () => {
  const data = await getProducts();
  return data.length;
};

export default productCount;
