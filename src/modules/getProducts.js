import axios from 'axios';

const getProducts = async () => {
  try {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products?limit=6',
    );
    return data;
  } catch (error) {
    return 'something went wrong';
  }
};

export default getProducts;
