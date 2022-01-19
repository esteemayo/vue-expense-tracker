import { createStore } from 'vuex';
import transactions from './modules/transactions';

const store = createStore({
  modules: {
    transactions,
  },
});

export default store;
