<template>
  <Header title="Expense Tracker" />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <TransactionForm />
  </div>
</template>

<script>
import TransactionList from '@/components/TransactionList';
import TransactionForm from '@/components/TransactionForm';
import IncomeExpenses from '@/components/IncomeExpenses';
import Balance from '@/components/Balance';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    TransactionForm,
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
