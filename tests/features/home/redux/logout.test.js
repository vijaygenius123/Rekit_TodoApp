import {
  HOME_LOGOUT,
} from '../../../../src/features/home/redux/constants';

import {
  logout,
  reducer,
} from '../../../../src/features/home/redux/logout';

describe('home/redux/logout', () => {
  it('returns correct action by logout', () => {
    expect(logout()).toHaveProperty('type', HOME_LOGOUT);
  });

  it('handles action type HOME_LOGOUT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_LOGOUT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
