<template>
  <div>
    choose the number of todos to show:
    <select v-on:change="filterTodos($event)">
      <option value="200">all</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos']),
  },
};
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 5px 30px 5px 20px;
    border: 2px solid #4cb5e9;
  }
</style>
