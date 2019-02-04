const frisby = require('frisby');

it('get /users should return 200', function () {
  return frisby.get('http://localhost:3000/users')
    .expect('status', 200);
});

it('post /users  should return payload', function () {
  return frisby.post('http://localhost:3000/users', {
      "name": "tester"
  })
    .expect('status', 200);

});