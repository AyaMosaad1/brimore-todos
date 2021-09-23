<template>
  <div id="app" class="mt-20">
    <AddTodo/>
    <hr/>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/todoList.vue';
import AddTodo from '@/components/addTodo/addTodo.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
  },
};
</script>

<style>
</style>
