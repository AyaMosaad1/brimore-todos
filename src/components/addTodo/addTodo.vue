<template>
  <div >
<h1> add todo to list </h1>
    <div>
      <div class="form-group row">
        <label for="Name" class="col-sm-1 col-lg-2 h2 lead mt-2"></label>
        <div class="col-sm-4 col-lg-8">
          <input type="text" id="Name" class="form-control"/>
        </div>

      </div>
      <div>
        <button @click="add()" button variant ="info" class="my-3 px-5">Add to Todo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const count = ref(store.state.todosState);
    const add = () => {
      store.commit('AddTodo');
    };
    return {
      count,
      add,
    };
  },
  name: 'AddTodo',
  props: {},
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
