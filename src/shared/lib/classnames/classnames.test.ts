import { classnames } from 'shared/lib/classnames/classnames'

describe('classnames', () => {
  test('with only argument', () => {
    expect(classnames('className', {})).toBe('className')
  })

  test('with additional argument', () => {
    const expected = 'className class1 class2'
    expect(classnames('className', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with Mods and additional argument', () => {
    const expected = 'className class1 class2 hovered'
    expect(classnames('className', { hovered: true }, ['class1', 'class2'])).toBe(expected)
  })

  test('with Mods (1 true and 1 false and 1 undefined) and additional argument', () => {
    const expected = 'className class1 class2 hovered'
    expect(classnames('className', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
  })
})
