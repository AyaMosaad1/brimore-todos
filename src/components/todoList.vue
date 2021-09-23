<template>
  <div class="container" v-for="item in $store.getters.AllTodos" :key="item.Name">
    <Todo :todo ="item"/>
  </div>
</template>

<script>
import Todo from '@/components/todo.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
};

</script>
