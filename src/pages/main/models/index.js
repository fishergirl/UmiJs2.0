import { q0Query, getUserInfo, scanRecord } from '../../../services/api';
export default {
  namespace: 'main',

  state: {

  },

  effects: {

  },

  reducers: {
    changeState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
