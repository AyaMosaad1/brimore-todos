<template>
  <div class="container">
    <ul v-for="item in $store.getters.AllTodos" :key="item.Name"> <li> data : {{ item.Name }} </li>
      <p> {{ item.IsCompleted ? "Completed" : "Not Done" }}</p>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'TodoList',
};

</script>
