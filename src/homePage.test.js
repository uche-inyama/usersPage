import React from 'react'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import HomePage from './appointments'

const mockStore = configureStore();
const store = mockStore();

const props = {
  centers: [{
    building: 'Albion',
    hall: 'Tulip'
  }]
}

describe('Appointment as a connected component', () => {
  it('', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomePage {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })
})