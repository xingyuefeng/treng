const expect = require('chai').expect
const fs = require('fs')
const path = require('path')

const Parser = require('../lib/parser')


const expectedOutput = `英 [naɪs] 美 [naɪs] \n\n释义:\nadj. 精密的；美好的；细微的；和蔼的\nn. (Nice)人名；(英)尼斯\n\n短语:\n nice guy 好人文化 ; 好好先生 ; 老好人  \n NICE CLAUP 奈伊茜 ; 奈思河 ; 以市场为导向 ; 从顾客需求的角度着手  \n Nice Cat 乖猫  \n\n例句:\nOh， what a nice little girl\n                          she is!\n啊， 这是一个多么好的小姑娘!\nHow nice it would be if I could go with you!\n要是我能跟你一块去， 那该多好哇!\nThis apple is\n                          very nice.\n这个苹果很好吃。\n\n详细信息:\nundefined`


describe('Unit tests for parser', () => {
	it('Test for parsing html page content', (done) => {
		const body = fs.readFileSync(path.join(__dirname, '../test/fixtures/index.html'))
		expect(Parser.parse(false, body)).to.equal(expectedOutput)
		done()
	})
})