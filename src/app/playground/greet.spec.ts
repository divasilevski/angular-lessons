import { greet } from './greet'

describe('greet', () => {

  it('should iclude name in return message', () => {
    expect(greet('Angular')).toContain('Angular')
  })
})