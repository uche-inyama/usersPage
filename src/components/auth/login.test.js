import React from 'react'
import { shallow } from 'enzyme'
import { Login } from './Login'

describe.skip('Login', () => {
  test('filling login form', () => {
    const wrapper = shallow(
      <Login />
    );
    let nameInput = wrapper.find('input').first()
    nameInput.simulate('change', {
      target: { value: 'Jack' },
    })
    nameInput = wrapper.find('input').first()
    expect(nameInput.props().value).toEqual('Jack')
    console.log(wrapper.debug())
  })
})