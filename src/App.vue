<template>
  <Header title="Expense Tracker" />
  <div class="container">
    <Balance :transactions="transactions" />
    <IncomeExpenses :transactions="transactions" />
    <TransactionList
      :transactions="transactions"
      @delete-transaction="deleteTransaction"
    />
    <TransactionForm @add-transaction="addTransaction" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import IncomeExpenses from './components/IncomeExpenses';
import Balance from './components/Balance';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    TransactionForm,
  },
  setup() {
    const transactions = ref([]);

    async function fetchTransactions() {
      const res = await fetch('api/transactions');
      const data = await res.json();
      return data;
    }

    async function addTransaction(transaction) {
      const res = await fetch('api/transactions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });

      const data = await res.json();

      transactions.value = [...transactions.value, data];
    }

    async function deleteTransaction(id) {
      const res = await fetch(`api/transactions/${id}`, {
        method: 'DELETE',
      });

      res.status === 200
        ? (transactions.value = transactions.value.filter(
            (transaction) => transaction.id !== id
          ))
        : alert('Error deleting transaction');
    }

    return {
      transactions,
      fetchTransactions,
      addTransaction,
      deleteTransaction,
    };
  },
  async created() {
    this.transactions = await this.fetchTransactions();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --color-white: #fff;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
}

.container {
  margin: 30px auto;
  width: 350px;
}

h1 {
  letter-spacing: 1px;
  margin: 0;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}
</style>
