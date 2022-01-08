<template>
  <li :class="signClass(transaction)">
    {{ transaction.text }}
    <span>
      {{ sign(transaction) }}
      ${{ Math.abs(transaction.amount) }}
    </span>
    <button
      class="delete-btn"
      @click="$emit('delete-transaction', transaction.id)"
    >
      <span class="fas fa-times"></span>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Transaction',
  props: {
    transaction: Object,
  },
  methods: {
    signClass(transaction) {
      return transaction.amount < 0 ? 'minus' : 'plus';
    },
    sign(transaction) {
      return transaction.amount < 0 ? '-' : '+';
    },
  },
};
</script>

<style scoped>
.list li:hover .delete-btn {
  opacity: 1;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: var(--color-white);
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
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

.delete-btn:focus {
  outline: none;
}
</style>
