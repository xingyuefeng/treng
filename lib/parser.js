const cheerio = require('cheerio')

let parser = {}
parser.parse = function (isChinese, body, url) {
	const $ = cheerio.load(body)
	let result = ''
	let sentenceSample = ''
	if (isChinese) {
		$('div.trans-container > ul').find('p.wordGroup').each(function (i) {
			if (i === 0) {
				result += '释义:\n'
			}
			result += $(this).text().replace(/\s+/g, ' ')
		})
	} else {
		$('div#phrsListTab > div.trans-container > ul').find('li').each(function (i) {
			if (i === 0) {
				result += '释义:\n'
			}
			result += $(this).text().replace(/\s+/g, ' ') + '\n'
		})
		$('div#webPhrase > p.wordGroup').not('.collapse').each(function (i) {
			if (i === 0) {
				result += '\n短语:\n'
			}
		
			result += `${$(this).text().replace(/\s+/g, ' ')} \n`

		})
		$('#bilingual ul li').find('p').each(function (i) {
			if (i === 0) {
				sentenceSample += '例句:\n'
			}
			if ($(this).attr('class') !== 'example-via') {
				sentenceSample += $(this).text().trim() + '\n'
			}
		})
	}
	// phrase or sentence
	if (result === '') {
		result = $('div#webPhrase > p.wordGroup').text() !== '' ? $('div#webPhrase > p.wordGroup').text() : $('div#fanyiToggle > div.trans-container > p:nth-child(2)').text()
	}
	// phonetic
	result = $('div#phrsListTab > h2.wordbook-js > div.baav > span').text().replace(/\s+/g, ' ') + '\n\n' + result + '\n' + sentenceSample + '\n' + '详细信息:' + '\n' + url
	return result
}
module.exports = parser