'use strict'

const Config = require('../lib/config')
const Proxyquire = require('proxyquire').noPreserveCache()
const KinesisStub = require('./stubs/kinesis')

let Handler = Proxyquire('../lib/handlers/list-streams', { '@heroku/kinesis': KinesisStub })(Config, {})

const Chai = require('chai')
const Mocha = require('mocha')

const describe = Mocha.describe
// const before = Mocha.before
// const beforeEach = Mocha.beforeEach
// const afterEach = Mocha.afterEach
const it = Mocha.it
const expect = Chai.expect

describe('list-streams handler', () => {
  it('can be required', (done) => {
    expect(Handler).to.exist
    done()
  })

  it('errors out', (done) => {
    try {
      let request = {}
      let reply = (obj) => {}
      expect(Handler(request, reply)).to.throw
    } catch (err) {
      expect(err).to.exist
      done()
    }
  })
})
