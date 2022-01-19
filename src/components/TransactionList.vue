<template>
  <h3>History</h3>
  <ul
    id="list"
    class="list"
    v-for="transaction in transactions"
    :key="transaction.id"
  >
    <Transaction :transaction="transaction" />
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Transaction from './Transaction';

export default {
  name: 'TransactionList',
  components: {
    Transaction,
  },
  computed: mapGetters(['transactions']),
  methods: mapActions(['fetchTransactions']),
  mounted() {
    this.fetchTransactions();
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  /* margin-bottom: 40px; */
}

.list li {
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
}

.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #c0392b;
}
</style>
