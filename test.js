const getf = require('./index')
const  { expect } = require('chai')
describe('getf', () => {
  it ('should get initial value', () => {
    const obj = {
      name: {
        first: 'Mihovil',
        last: 'Rister',
      }
    }

    const result = getf(obj, 'name.first')
    expect(result).to.eql(obj.name.first)
  })

  it ('should get fallback value from path value', () => {
    const obj = {
      name: {
        first: 'Mihovil',
      }
    }

    const result = getf(obj, [ 'initials', 'name.first'])
    expect(result).to.eql(obj.name.first)
  })

  it ('should return default value if none found', () => {
    const obj = {
      name: {
        first: 'Mihovil',
      }
    }

    const DEFAULT_VALUE = 'N/A';
    const result = getf(obj, [ 'initials', 'address', 'gender'], DEFAULT_VALUE)
    expect(result).to.eql(DEFAULT_VALUE)
  })
})
