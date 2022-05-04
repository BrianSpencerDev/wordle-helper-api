const request = require('supertest');
const app = require('../src/index.js');

describe('GET /', () => {

    describe('given letters', () => {
        test('should respond with a 200 status code', async () => {
            const response = await request(app).get("/").send({
                letters: 'c???R'
            })
            expect(response.statusCode).toBe(200)
        })

        //should respond with json

        //response has words 
    })

    describe('when letters is missing', () => {
        //should respond with status code of 400
    })
})