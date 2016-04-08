'use strict'

var chai = require('chai')
var __ = require('../index')

var expect = chai.expect

/*globals describe,it*/

describe('__', function() {

  it('function', function() {
    expect(__).to.be.a('function')
  })

  describe('translation', function() {
    it('has resources', function() {
      __.resources = {
        'default': {
          'a': '啊',
          '0': '零',
          '1': '壹'
        },
        'error': {
          'a': 'alpha',
          '0': 'zero',
          '1': 'one'
        }
      }
      expect(__('a')).to.equal('啊')
      expect(__('b')).to.equal('b')
      expect(__('')).to.equal('')
      expect(__({})).to.eql({})
      expect(__([])).to.eql([])
      expect(__(null)).to.equal(null)
      expect(__(undefined)).to.equal(undefined)
      expect(__(false)).to.equal(false)
      expect(__(true)).to.equal(true)
      expect(__(0)).to.equal(0)
      expect(__(1)).to.equal(1)
      expect(__('0')).to.equal('零')
      expect(__('1')).to.equal('壹')
      // error
      expect(__('a', 'error')).to.equal('alpha')
      expect(__('0', 'error')).to.equal('zero')
      expect(__('1', 'error')).to.equal('one')
    })

    it('has NOT resources', function() {
      __.resources = null
      expect(__('a')).to.equal('a')
    })
  })

})
