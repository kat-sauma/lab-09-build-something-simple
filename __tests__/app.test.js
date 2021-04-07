const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Dancer = require('../lib/models/Dancer');

describe('build-something-simple routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let dancer;
  beforeEach(async () => {
    dancer = await Dancer.insert({  name: 'Bebe Miller', genre: 'Post-Modern', method: 'True', country: 'USA' });

  });

  it ('adds a choreographer to the database', async () => {
    const res = await request(app)
      .post('/api/v1/dancers')
      .send({ name: 'Bebe Miller', genre: 'Post-Modern', method: 'True', country: 'USA' });

    expect(res.body).toEqual({ 
      id: expect.any(String),
      name: 'Bebe Miller', 
      genre: 'Post-Modern', 
      method: true, 
      country: 'USA'
    });
  });

});
