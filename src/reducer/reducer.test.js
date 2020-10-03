import { user, appointmentBookings } from './reducer';
import * as actions from '../actions/action';
import { initStore } from './store';

describe.skip('users reducer', () => {
  let store;
  beforeAll(() => {
    store = initStore();
  });

  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual(null);
  });

  it('should handle POST_USER', () => {
    const user = [{ username: 'uchenry' }];
    store.dispatch(actions.postUser(user));
    expect(store.getState().user).toEqual(
      [{ username: 'uchenry' }],
    );
  });
});

describe('appointmentBookings reducer', () => {
  let store;
  beforeAll(() => {
    store = initStore();
  });
  it('should return the initial state', () => {
    expect(appointmentBookings(undefined, {})).toEqual([]);
  });

  it('should BOOK_APPOINTMENT', () => {
    const data = { id: 1, username: 'uchenry', email: 'xyz@gmail.com' };
    store.dispatch(actions.bookAppointment(data));
    expect(store.getState().appointmentBookings).toEqual(
      [{ id: 1, username: 'uchenry', email: 'xyz@gmail.com' }],
    );
  });
  it('should GET_APPOINTMENTS', () => {
    expect(store.getState().appointmentBookings).toEqual(
      [{ email: 'xyz@gmail.com', id: 1, username: 'uchenry' }],
    );
  });
});
