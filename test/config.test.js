const config = require('../lib/config')
const chai = require('chai')
const expect = chai.expect

describe('Unit tests for config', () => {
	it('Tests for reading configurations', (done) => {
		expect(config.proxy).to.be.undefined
		expect(config.spinner).to.be.true
		expect(config.color).to.equal('white')
		expect(config.getURL('nice')).to.equal('https://dict.youdao.com/w/')
		expect(config.getURL('美好的')).to.equal('https://dict.youdao.com/w/eng/')
		done()
	})
})