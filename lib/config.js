const isChinese = require('is-chinese')

let config = {
	proxy: undefined,
	spinner: true,
	color: 'white',
	getURL: function (word) {
		return isChinese(word) ? 'https://dict.youdao.com/w/eng/' : 'https://dict.youdao.com/w/'
	}
}

module.exports = config