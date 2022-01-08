<template>
  <div>
    <h4>Your Balance</h4>
    <h1>${{ total(transactions) }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  props: {
    transactions: Array,
  },
  methods: {
    total(transactions) {
      const total = transactions
        .map((transaction) => transaction.amount)
        .reduce((total, item) => (total += item), 0);

      return parseFloat(total).toFixed(2);
    },
  },
};
</script>
