import * as got from 'got';

let token = '';

beforeAll(done => {
  got('http://localhost:7000/v1/auth/login', {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    json: true,
    body: {
      username: 'stark@marvel.com',
      password: 'password',
    },
  })
    .then(res => {
      token = res.body.accessToken;
      return done();
    })
    .catch(err => {
      throw err;
    });
});

describe('List all skill category', () => {
  test('List all category api', done => {
    got(`http://localhost:7000/v1/profile/list-all-skill-categories`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer ${token}`,
      },
      // json: true,
      // body: {
      //   content: [
      //     {
      //       name: 'cat-business-fn',
      //       businessFunctionId: '5b4f0845b48361468f85033c',
      //     },
      //   ],
      // },
    })
      .then(() => done())
      .catch(err => {
        throw err;
      });
  });
});
