const request = require('supertest');
const server = require('../api/server.js');

describe('Jokes Router', () => {
  it('Runs the tests', () => {
    expect(true).toBe(true);
  })

  describe('GET to "/api/jokes"', () => {
    it("Returns status code 200", () => {
      //Make sure to run the server, login, and then use the token that is given to you on login
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4MDQ4OTk5MCwiZXhwIjoxNTgwOTIxOTkwfQ.QeyXHKGyztdH32btirmf9NQ37sshJvYaZvAJkd-WHjA";

      return request(server).get('/api/jokes')
        .set('Authorization', token)
        .then(res => {
          expect(res.status).toBe(200);
        })
    })
  })

  describe('GET to "/api/jokes"', () => {
    it("Returns an object", () => {
      //Make sure to run the server, login, and then use the token that is given to you on login
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4MDQ4OTk5MCwiZXhwIjoxNTgwOTIxOTkwfQ.QeyXHKGyztdH32btirmf9NQ37sshJvYaZvAJkd-WHjA";

      return request(server)
        .get('/api/jokes')
        .set('Authorization', token)
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })
  })
})
