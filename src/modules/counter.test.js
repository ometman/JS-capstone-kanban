import getResdataApi from './getResdataApi.js';
import productCount from './productCount.js';
import getCommentCount from './commentCount.js';
import { getCommentData } from './getData.js';

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

describe('comment count test', () => {
  it('should return the length of comments', async () => {
    const comments = await getCommentData(1);
    const expectedCount = getCommentCount(comments);

    // Assert the result
    expect(comments.length).toBe(expectedCount);
  });
});
