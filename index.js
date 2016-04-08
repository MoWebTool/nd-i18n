/**
 * @module i18n
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict'

function isString(value) {
  return typeof value === 'string'
}

/**
 * 翻译入口
 * @param  {string} text text to be translated
 * @param  {string} ns   namespace
 * @return {string}      translating result
 */
var i18n = function(text, ns) {
  if (!text || !isString(text) || !i18n.resources) {
    return text
  }

  var nsArr = isString(ns) ? ns.split(/[\.\/]/) : [i18n.defaultNS]

  var result = nsArr.concat(text)
  .reduce(function(obj, key) {
    if (obj && obj.hasOwnProperty(key)) {
      return obj[key]
    }

    return null
  }, i18n.resources)

  return result === null ? text : result
}

// 默认 namespace
i18n.defaultNS = 'default'

// 当前加载的语言资源
i18n.resources = null

// 当前支持的语言列表
i18n.languages = null

module.exports = i18n
