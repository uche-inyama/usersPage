import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Appointments from './appointments';

const mockStore = configureStore();
const store = mockStore();

const props = {
  appointment: [{
    hall: 'Albion',
    email: 'abc@gmail.com',
  }],
};

describe.skip('Appointment as a connected component', () => {
  it('', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Appointments
          hall={props.appointment.hall}
          email={props.appointment.email}
        />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
