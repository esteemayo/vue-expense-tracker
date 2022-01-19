const transactions = {
  state: () => ({
    transactions: [],
  }),
  mutations: {
    setTransactions(state, payload) {
      state.transactions = payload;
    },
    newTransaction(state, payload) {
      state.transactions.push(payload);
    },
    removeTransaction(state, payload) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== payload
      );
    },
  },
  actions: {
    async fetchTransactions({ commit }) {
      const res = await fetch('api/transactions');
      const data = await res.json();

      commit('setTransactions', data);
    },
    async addTransaction({ commit }, payload) {
      const res = await fetch('api/transactions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      commit('newTransaction', data);
    },
    async deleteTransaction({ commit, state }, payload) {
      const res = await fetch(`api/transactions/${payload}`, {
        method: 'DELETE',
      });

      res.status === 200
        ? (state.transactions = state.transactions.filter(
            (transaction) => transaction.id !== payload
          ))
        : alert('Error deleting transaction');

      commit('removeTransaction', payload);
    },
  },
  getters: {
    transactions: (state) => state.transactions,
  },
};

export default transactions;
