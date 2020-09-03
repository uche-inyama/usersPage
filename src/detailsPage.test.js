import React from 'react'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import DetailsPage from './detailsPage';
import { DetailPage } from './detailsPage'


const mockStore = configureStore();
const store = mockStore();

const props = {
  centers: [{ building: "Alvan", hall: "Albion" }]
};

describe('detailsPage as a connected component', () => {
  it('', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DetailsPage {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it.only('', () => {
    const dispatch = jest.fn();
    store.dispatch = dispatch();

    const wrapper = shallow(
      <Provider store={store}>
        <DetailsPage />
      </Provider>
    );
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
  it('', () => {
    const onChange = jest.fn();

    const wrapper = shallow(
      <DetailPage {...props} onChange={onChange} />
    );

    let nameInput = wrapper.find('input').first()
    nameInput.simulate('change', {
      target: { value: 'Jack' },
    })
    nameInput = wrapper.find('input').first()
    expect(nameInput.props().value).toEqual('Jack')
  })
})