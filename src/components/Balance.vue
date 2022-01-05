<template>
  <div>
    <h4>Your Balance</h4>
    <h1>
      ${{
        parseFloat(
          transactions
            .map((transaction) => transaction.amount)
            .reduce((total, item) => (total += item), 0)
        ).toFixed(2)
      }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  props: {
    transactions: Array,
  },
};
</script>
