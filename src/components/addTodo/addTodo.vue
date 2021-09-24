<template>
  <div class='container' >
  <h1 class='text-center mt-5'> Add Todo </h1>
    <div>
      <div class='form-group row'>
        <label for='Name' class='col-sm-1 col-lg-2 h2 lead mt-2'></label>
        <div class='col-sm-4 col-lg-8' >
          <b-form-input size='lg' type="text" v-model="title" class='form-control'> </b-form-input>
        </div>

      </div>
      <div class='row m-4'>
        <div class='col-lg-3'></div>
        <b-button @click="onSubmit" class='mx-5 col-lg-5' variant='info' value="Submit">
          <b-icon icon='plus-square' ></b-icon> add
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { useStore, mapActions, mapGetters } from 'vuex';

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
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(event:any) {
      event.preventDefault();
      console.log(this.title);
      this.addTodo(this.title);
      console.log(this.allTodos);
      this.title = ' ';
    },
  },
  computed: mapGetters(['allTodos']),
});
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
