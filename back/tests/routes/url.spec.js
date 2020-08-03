import request from 'supertest'
import app from '../../src/app'
import { describe, expect, it } from '@jest/globals'

describe('URL Endpoints', () => {
  it('should create a new url', async () => {
    const res = await request(app)
      .post('/url')
      .send('url=google.com') // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
    expect(res.statusCode).toEqual(200)
    expect(res.body.data).toHaveProperty('url')
  })
})
