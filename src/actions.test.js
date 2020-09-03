import * as actions from './action'
import store from './store'

describe.skip('actions', () => {
  const centers = [
    {
      building: 'Taj',
      hall: 'Annex'
    }
  ];

  const user = { username: 'uchenry' };
  const id = 1;
  it('gets centers', () => {
    const expectedAction = {
      type: actions.GET_CENTERS,
      centers
    }
    expect(actions.getCenters(centers)).toEqual(expectedAction)
  })

  it.only('gets Center', () => {
    const expectedAction = {
      type: actions.GET_CENTER,
      id
    }
    expect(actions.getCenter(id)).toEqual(expectedAction)
  })

  it('posts center', () => {
    const expectedAction = {
      type: actions.POST_USER,
      user
    }
    expect(actions.postUser(user)).toEqual(expectedAction)
  })

  it('gets appointments', () => {
    const expectedAction = {
      type: actions.GET_APPOINTMENTS,
      appointments
    }
    expect(actions.getAppointments(appointments)).toEqual(expectedAction)
  })

  it('books appointment', () => {
    const expectedAction = {
      type: actions.BOOK_APPOINTMENT,
      booking
    }
    expect(actions.bookAppointment(booking)).toEqual(expectedAction)
  })
})

describe.skip('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('receives centers', () => {
    fetchMock.getOnce('http://localhost:3002/api/v1/centers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' }
    })
    const expectedActions = [
      {
        type: actions.GET_CENTERS,
        centers:
          [{ building: 'Taj', hall: 'Avalon' }]
      }
    ]
    store.dispatch(actions.receiveCenters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('receives user', () => {
    fetchMock.getOnce(`http://localhost:3002/registrations`, {
      method: 'GET',
      body: { user: { username: 'uchenry' } },
      headers: { 'content-type': 'application/json' }
    })
    const expectedActions = [
      {
        type: actions.POST_USER,
        user: { username: 'uchenry' }
      }
    ]
    store.dispatch(actions.postUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('shedules meeting', () => {
    fetchMock.getOnce(`http://localhost:3002/appointments`, {
      method: 'POST',
      body: { appointment: { username: 'uchenry', email: 'uche@gmail.com' } },
      headers: { 'content-type': 'application/json' }
    })
    const expectedActions = [
      {
        type: actions.BOOK_APPOINTMENT,
        appointment: { username: 'uchenry', email: 'uche@gmail.com' }
      }
    ]
    store.dispatch(actions.sheduleMeeting()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})