<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <div class="money plus">+${{ income(transactions) }}</div>
    </div>
    <div>
      <h4>Expense</h4>
      <p class="money minus">-${{ expense(transactions) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IncomeExpenses',
  props: {
    transactions: Array,
  },
  methods: {
    income(transactions) {
      const amount = transactions.map((transaction) => transaction.amount);

      const income = amount
        .filter((transaction) => transaction > 0)
        .reduce((total, item) => (total += item), 0);

      return parseFloat(income).toFixed(2);
    },
    expense(transactions) {
      const amount = transactions.map((transaction) => transaction.amount);

      const expense =
        amount
          .filter((item) => item < 0)
          .reduce((total, item) => (total += item), 0) * -1;

      return expense;
    },
  },
};
</script>

<style scoped>
.inc-exp-container {
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>
