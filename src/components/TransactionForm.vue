<template>
  <div>
    <h3>Add new transaction</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          v-model.trim="text"
          placeholder="Enter text..."
        />
      </div>

      <div class="form-control">
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          v-model.number="amount"
        />
      </div>

      <Button text="Add Transaction" />
    </form>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'TransactionForm',
  components: {
    Button,
  },
  data() {
    return {
      text: '',
      amount: 0,
    };
  },
  methods: {
    handleSubmit() {
      if (this.text && this.amount) {
        const newTransaction = {
          text: this.text,
          amount: +this.amount,
        };

        this.$emit('add-transaction', newTransaction);

        this.text = '';
        this.amount = 0;
      }
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  caret-color: #9c88ff;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

input:focus {
  outline: none;
}
</style>
