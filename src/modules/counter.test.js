import productCount from './productCount.js';
import { getCommentData } from './getData.js';
import getCommentCount from './commentCount.js';

describe('productCount', () => {
  it('should return the length of products', async () => {
    const result = productCount();
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
