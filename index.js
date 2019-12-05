#!/usr/bin/env node

const chalk = require('chalk');
const ora = require('ora');
const isChinese = require('is-chinese')
const urlencode = require('urlencode')
const noCase = require('no-case').noCase
const request = require('request')
const config = require('./lib/config')
const Parser = require('./lib/parser')

let word = process.argv.slice(2).join(' ')


if (!word) {
	console.log(chalk.yellowBright('用法: sbf <要翻译的文字...>'))
	process.exit()
}

const spinner = ora(` ${chalk.greenBright('查询中... %s')}`)

if (config.spinner) {
	spinner.start()
}



const isCN = isChinese(word)

word = isCN ? word : noCase(word)

const options = {
	url: config.getURL(word) + urlencode(word),
	proxy: config.proxy || null
}

const ColorOutput = chalk.keyword(config.color)


request(options, (error, response, body) => {
	if (error) {
		console.error(error)
	}

	if (config.spinner) {
		spinner.stop()
	}
	console.log(ColorOutput(Parser.parse(isCN, body, options.url)))
})

