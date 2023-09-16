import getResdataApi from './getResdataApi.js';
import productCount from './productCount.js';

describe('productCount', () => {
  it('should return the length of products', async () => {
    const result = productCount();
    expect(result.length).toBe(result.length);
  });

  it('should return the length of reservations', async () => {
    const result = getResdataApi(5);
    expect(result.length).toBe(result.length);
  });
});
