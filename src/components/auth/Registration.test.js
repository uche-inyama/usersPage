import React from 'react';
import { shallow } from 'enzyme';
import { Registration } from './Registration';

describe.skip('Registration', () => {
  test('filling Registration form', () => {
    const wrapper = shallow(
      <Registration />,
    );
    let nameInput = wrapper.find('input').first();
    nameInput.simulate('change', {
      target: { value: 'Jack' },
    });
    nameInput = wrapper.find('input').first();
    expect(nameInput.props().value).toEqual('Jack');
  });
});
