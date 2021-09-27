<template>
   <div class="container">

   <div class="my-4">
      <Filter />
   </div>

    <a-form-item class="ml-5">
      <a-radio-group class="lg"
       @change="handleFormLayoutChange"
       >
        <a-radio-button value="all">
          All todos
        </a-radio-button>
        <a-radio-button value="completed">
          completed todos
        </a-radio-button>
        <a-radio-button value="Apend">
        Not completed todos
        </a-radio-button>
      </a-radio-group>
    </a-form-item>

<div v-if="type === 'all'">
         <div
        v-for="todo in allTodos"
        v-bind:key="todo.key"
        >
        <Todo
        :todo ="todo"
        />
      </div>
</div>

<div v-if="type === 'completed'">
         <div
        v-for="todo in allTodos"
        v-bind:key="todo.key"
        >
        <div v-if="todo.completed">
        <Todo
        :todo ="todo"
        />
        </div>
      </div>
</div>

<div v-if="type === 'Apend'">
         <div
        v-for="todo in allTodos"
        v-bind:key="todo.key"
        >
        <div v-if="!todo.completed">
        <Todo
        :todo ="todo"
        />
        </div>
      </div>
</div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Todo from '@/components/todo.vue';
import Filter from '@/components/filter.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
    Filter,
  },
  data() {
    return {
      type: String,
    };
  },
  methods: {
    ...mapActions(['fetchTodos']),
    handleFormLayoutChange(e) {
      this.type = e.target.value;
    },
  },
  computed: mapGetters(['allTodos', 'CompletedTodos', 'apendTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>
