<template>
  <div
  v-for="todo in allTodos"
  v-bind:key="todo.key">
  <Todo
  :todo ="todo"
  />
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Todo from '@/components/todo.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>
