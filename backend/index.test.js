const index  = require('./');
const request = require('supertest')

describe('index aplication', () => {
    test('should start aplication', () => {
        expect(typeof index).toBe("function")
    })

    test('should response with an arry of products', async () => {
        const response = await request(index).get('/api/items?q=ipad')
        expect(response.statusCode).toBe(200)
    })

    test('should response error call /api/items no send paramets', async () => {
        const response = await request(index).get('/api/items')
        expect(response.statusCode).toBe(200)
    })

    test('should response with an object of product', async () => {
        const response = await request(index).get('/api/items/MLB1669620177')
        expect(response.statusCode).toBe(200)
    })

    test('should response error call a product id that doesn t exist', async () => {
        const response = await request(index).get('/api/items/aaa')
        expect(response.statusCode).toBe(404)
    })
})