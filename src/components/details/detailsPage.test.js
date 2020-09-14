/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DetailsPage from './detailsPage';

const mockStore = configureStore();
const store = mockStore();

const props = {
  centers: [
    {
      building: 'Alvan',
      hall: 'Albion',
      city: 'asdf',
      state: 'asdf',
      price: 200,
      capacity: 100,
    },
  ],
  bookings: jest.fn(),
  match: {
    params: { id: 1 },
  },
};

describe('detailsPage as a connected component', () => {
  it('gets snap shot for details page', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DetailsPage {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('checks if the dispatch function have been called', () => {
    const dispatch = jest.fn();
    store.dispatch = dispatch();

    shallow(
      <Provider store={store}>
        <DetailsPage {...props} />
      </Provider>,
    );
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
