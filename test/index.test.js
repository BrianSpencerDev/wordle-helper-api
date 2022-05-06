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

        test('should respond with a 400 status code', async () => {
            const response = await request(app).get("/").send()
            expect(response.statusCode).toBe(400)
        })
    })

    describe('given letters containing incorrect data', () => {
        
        test('if letters is not a string should respond with 400 status code', async () => {
            const response = await request(app).get("/").send({letters: ['a', 'b', 'c']})
            expect(response.statusCode).toBe(400)
        })

        test('if letters is less than 1 char length respond with 400 status code', async () => {
            const response = await request(app).get("/").send({letters: ''})
            expect(response.statusCode).toBe(400)
        })

        test('if letters is more than 5 char length respond with 400 status code', async () => {
            const response = await request(app).get("/").send({letters: 'abcdef'})
            expect(response.statusCode).toBe(400)
        })

        test('if letters contains anything not (a-z, A-Z, ?) respond with 400 status code', async () => {
            const response = await request(app).get("/").send({letters: '@*%12'})
            expect(response.statusCode).toBe(400)
        })
    })
})